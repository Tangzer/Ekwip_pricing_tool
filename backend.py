from flask import Flask, request, jsonify
from flask_cors import CORS
from serpapi import GoogleSearch
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)  # Autoriser les requêtes entre back-/frontend
print("CORS enabled")

# Récupère la clé du .env
load_dotenv()
API_KEY = os.getenv("API_KEY")
if API_KEY:
    print("API_KEY chargé avec succès")
else:
    print("Erreur : API_KEY non défini")

# Route de test
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend is running!"})

# Route principale
@app.route("/search", methods=["POST"])
def search_prices():
    print("POST request received")
    try:
        print("DEBUG")
        print(request.json)
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
        else:
            average_price = None

        return jsonify({"average_price": average_price, "prices": prices})

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

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
