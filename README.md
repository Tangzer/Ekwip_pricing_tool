This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

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


TO DO : 
- Fournissez un lien GitHub avec un README expliquant comment exécuter le projet.
- Incluez les URLs des déploiements backend et frontend.
- Dépendances :
    - install npm
    - install node
    - install requirements :
        pip install -r requirements.txt

