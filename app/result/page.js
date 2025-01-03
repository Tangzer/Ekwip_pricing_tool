// "use client";
// import { useSearchParams } from "next/navigation";

// export default function Result() {
//   const searchParams = useSearchParams();

//   const formData = JSON.parse(searchParams.get("formData") || "{}");
//   const averagePrice = searchParams.get("average_price");

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#1a202c",
//         color: "#edf2f7",
//         minHeight: "100vh",
//         padding: "20px",
//         textAlign: "center",
//       }}
//     >
//       <h1 style={{ color: "#63b3ed" }}>Résultat de l'évaluation</h1>
//       <div
//         style={{
//           maxWidth: "400px",
//           margin: "20px auto",
//           backgroundColor: "#2d3748",
//           padding: "20px",
//           borderRadius: "8px",
//         }}
//       >
//         <h2 style={{ color: "#63b3ed" }}>Résumé des informations</h2>
//         <p>
//           <strong>Catégorie :</strong> {formData.categorie || "Non renseigné"}
//         </p>
//         <p>
//           <strong>Marque :</strong> {formData.marque || "Non renseigné"}
//         </p>
//         <p>
//           <strong>Modèle :</strong> {formData.modele || "Non renseigné"}
//         </p>
//         <p>
//           <strong>Année :</strong> {formData.annee || "Non renseigné"}
//         </p>
//         <p>
//           <strong>Couleur :</strong> {formData.couleur || "Non renseigné"}
//         </p>

//         <h2 style={{ color: "#63b3ed", marginTop: "20px" }}>
//           Prix estimé :
//         </h2>
//         <p style={{ fontSize: "24px", fontWeight: "bold" }}>
//           {averagePrice ? `${averagePrice} €` : "Non disponible"}
//         </p>
//         <button 
//             type="submit" 
//             className="btn"
//             onClick={() => window.location.replace("/")}>
//             Retour au formulaire
//         </button>
//       </div>
     
//     </div>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultContent() {
  const searchParams = useSearchParams();

  const formData = JSON.parse(searchParams.get("formData") || "{}");
  const averagePrice = searchParams.get("average_price");

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1a202c",
        color: "#edf2f7",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#63b3ed" }}>Résultat de l'évaluation</h1>
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          backgroundColor: "#2d3748",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#63b3ed" }}>Résumé des informations</h2>
        <p>
          <strong>Catégorie :</strong> {formData.categorie || "Non renseigné"}
        </p>
        <p>
          <strong>Marque :</strong> {formData.marque || "Non renseigné"}
        </p>
        <p>
          <strong>Modèle :</strong> {formData.modele || "Non renseigné"}
        </p>
        <p>
          <strong>Année :</strong> {formData.annee || "Non renseigné"}
        </p>
        <p>
          <strong>Couleur :</strong> {formData.couleur || "Non renseigné"}
        </p>

        <h2 style={{ color: "#63b3ed", marginTop: "20px" }}>Prix estimé :</h2>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          {averagePrice ? `${averagePrice} €` : "Non disponible"}
        </p>
        <button 
          type="submit" 
          className="btn"
          onClick={() => window.location.replace("/")}>
          Retour au formulaire
        </button>
      </div>
    </div>
  );
}

export default function Result() {
  return (
    <Suspense fallback={<div>Chargement des résultats...</div>}>
      <ResultContent />
    </Suspense>
  );
}