URL frontend : https://ekwip-pricing-tool.vercel.app

URL backend : https://ekwippricingtool-production.up.railway.app

## Ekwip Price Tool 

Objectif
Mettre en place un prototype fonctionnel permettant de suggérer automatiquement un prix de vente pour un article, basé sur une analyse des prix du marché en ligne.

Tech :
- Interface frontend = Next.js
- Déploiement = Vercel (frontend) & Railway (backend) + Flask & Gunicorn
- API = SerpAPI (--> imité à 100 requêtes/mois)

1. Saisie des données produit
    L'interface permet à un utilisateur d'entrer le informations du peroduit + cliquer sur un bouton submit :
    - Catégorie
    - Marque
    - Modèle
    - Année
    - Couleur

2. Recherche de prix sur le web (Backend)
    Endpoint API (serpAPI) :
    - Recevoir les données saisies (catégorie, marque, modèle, etc.).
    - Effectuer une recherche web
    - Scraper les résultats
    - Nettoyer les données

3. Retourner le prix suggéré au frontend

4. Affichage du résultat de façon pertinente

## Getting Started Locally
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, install the dependancies :
1. Install npm
2. Install dependancies :
```bash
npm install
```
3. Install requirements :
```bash 
pip install -r requirements.txt
```

Run the frontend locally :
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Run the backend locally :
```bash    
python backend.py
```