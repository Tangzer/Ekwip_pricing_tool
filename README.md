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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Ekwip Price Tool 

Objectif
Mettre en place un prototype fonctionnel permettant de suggérer automatiquement un prix de vente pour un article, basé sur une analyse des prix du marché en ligne.

Tech :
- Interface frontend = Next.js
- Déploiement = Vercel
- API = Python Flask & SerpAPI (--> imité à 100 requêtes/mois)

1. Saisie des données produit
    L'interface permet à un utilisateur d'entrer :
    - Catégorie
    - Marque
    - Modèle
    - Année
    - Couleur

2. Recherche de prix sur le web (Backend)
    Endpoint API (serpAPI) en Python Flask :
    - Recevoir les données saisies (catégorie, marque, modèle, etc.).
    - Effectuer une recherche web
    - Scraper les résultats
    - Nettoyer les données

3. Retourner le prix suggéré au frontend

4. Affichage du résultat de façon pertinente

TO DO : 
- Fournissez un lien GitHub avec un README expliquant comment exécuter le projet.
- Incluez les URLs des déploiements backend et frontend.
- Dépendences :
    - install npm
    - install node
    - (npm install -g vercel)
    - install requirements :
        pip install -r requirements.txt

