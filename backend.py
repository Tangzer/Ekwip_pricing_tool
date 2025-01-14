from flask import Flask, request, jsonify, redirect, url_for
from flask_cors import CORS
from serpapi import GoogleSearch
import os
from dotenv import load_dotenv
import json

app = Flask(__name__)
CORS(app)

# Récupère la clé du .env
load_dotenv()
API_KEY = os.getenv("API_KEY")
if API_KEY:
    print("API_KEY chargé avec succès")
else:
    print("Erreur : API_KEY non défini")

# Route principale GET
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend is running!"})

# Route OPTIONS pour gérer les pré-requêtes
@app.route("/search", methods=["OPTIONS"])
def options_search():
    print("OPTIONS request received on /search")
    return "", 200

# Route principale POST
@app.route("/search", methods=["POST"])
def search_prices():
    try:
        # Récupérer les données envoyées par le frontend
        data = request.json
        categorie = data.get("categorie")
        marque = data.get("marque")
        modele = data.get("modele")
        annee = data.get("annee")
        couleur = data.get("couleur")

        # Construire une requête de recherche
        query = f"{categorie} {marque} {modele} {annee} {couleur} prix"

        # Appeler SerpAPI
        search = GoogleSearch({"q": query, "location": "Belgium", "api_key": API_KEY})
        results = search.get_dict()

        # Extraire les prix des résultats
        prices = extract_prices_from_results(results)

        # Calculer la moyenne
        if prices:
            average_price = sum(prices) / len(prices)
            prices_query = json.dumps(prices)
        else:
            average_price = None
            prices_query = "[]"

        return jsonify({"average_price": average_price, "prices": prices_query})
 
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Extrait les prix des résultats de recherche
def extract_prices_from_results(results):
    prices = []
    for result in results.get("organic_results", []):
        snippet = result.get("snippet", "")
        price = parse_price(snippet)
        if price:
            prices.append(price)
    return prices

# Convertis les prix extraits en nombres
def parse_price(text):
    import re
    match = re.search(r"(\d+[\.,]?\d*)\s?[$€]", text)
    if match:
        return float(match.group(1).replace(",", "."))
    return None

# Gestion des erreurs
@app.errorhandler(405)
def method_not_allowed(e):
    print(f"405 Error: {request.method} not allowed on {request.path}")
    return jsonify({"error": "Method not allowed"}), 405

@app.errorhandler(404)
def not_found(e):
    print(f"404 Error: {request.path} not found")
    return jsonify({"error": "Route not found"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)