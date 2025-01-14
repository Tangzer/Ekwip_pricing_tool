"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    categorie: "",
    marque: "",
    modele: "",
    annee: "",
    couleur: "",
  });

  // Fonction pour mettre à jour les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Formulaire soumis", formData);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Redirection vers "/result" avec les paramètres encodés dans l'URL
        const params = new URLSearchParams({
          formData: JSON.stringify(formData),
          prices: data.prices,
          average_price: parseFloat(data.average_price).toFixed(2) // Valeur retournée par le backend, arrondi à 2 décimales
        });
        window.location.href = `/result?${params.toString()}`;
      } else {
        console.error("Erreur lors de l'appel à l'API :", data.message);
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
    }
  
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#1a202c", color: "#edf2f7", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#63b3ed", textAlign: "center" }}>Ekwip Pricing Tool</h1>
      <form 
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto", backgroundColor: "#2d3748", padding: "20px", borderRadius: "8px" }}
      >
        <label style={{ display: "block", marginBottom: "10px" }}>
          Catégorie :
          <input
            type="text"
            name="categorie"
            value={formData.categorie}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #4a5568" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Marque :
          <input
            type="text"
            name="marque"
            value={formData.marque}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #4a5568" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Modèle :
          <input
            type="text"
            name="modele"
            value={formData.modele}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #4a5568" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Année :
          <input
            type="number"
            name="annee"
            value={formData.annee}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #4a5568" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Couleur :
          <input
            type="text"
            name="couleur"
            value={formData.couleur}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "4px", border: "1px solid #4a5568" }}
          />
        </label>
        <button type="submit" className="btn">
          Lancer la recherche
        </button>
      </form>
    </div>
  );
}