"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

function ResultContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({});
  const [averagePrice, setAveragePrice] = useState("");

  useEffect(() => {
    const parsedFormData = JSON.parse(searchParams.get("formData") || "{}");
    const price = searchParams.get("average_price") || "";

    setFormData(parsedFormData);
    setAveragePrice(price);
  }, [searchParams]);

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
      <h1 style={{ color: "#63b3ed" }}>Résultat de l&aposévaluation</h1>
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
          onClick={() => window.location.replace("/")}
        >
          Retour au formulaire
        </button>
      </div>
    </div>
  );
}

export default function Result() {
  return (
    <Suspense fallback={<p>Chargement...</p>}>
      <ResultContent />
    </Suspense>
  );
}




// // "use client";
// // import { Suspense } from "react";
// // import { useSearchParams } from "next/navigation";

// // export default function Result() {
// //   const searchParams = useSearchParams();

// //   const formData = JSON.parse(searchParams.get("formData") || "{}");
// //   const averagePrice = searchParams.get("average_price");

// // //   return (
// // //     <Suspense fallback={<div>Loading...</div>}>
// // //       <div>
// // //         <h1>Résultats</h1>
// // //         <p>Données du formulaire : {JSON.stringify(formData)}</p>
// // //         <p>Prix moyen : {averagePrice}</p>
// // //       </div>
// // //     </Suspense>
// // //   );
// // // }

// //   return (
// //     <div
// //       style={{
// //         fontFamily: "Arial, sans-serif",
// //         backgroundColor: "#1a202c",
// //         color: "#edf2f7",
// //         minHeight: "100vh",
// //         padding: "20px",
// //         textAlign: "center",
// //       }}
// //     >
// //       <h1 style={{ color: "#63b3ed" }}>Résultat de l'évaluation</h1>
// //       <div
// //         style={{
// //           maxWidth: "400px",
// //           margin: "20px auto",
// //           backgroundColor: "#2d3748",
// //           padding: "20px",
// //           borderRadius: "8px",
// //         }}
// //       >
// //         <h2 style={{ color: "#63b3ed" }}>Résumé des informations</h2>
// //         <p>
// //           <strong>Catégorie :</strong> {formData.categorie || "Non renseigné"}
// //         </p>
// //         <p>
// //           <strong>Marque :</strong> {formData.marque || "Non renseigné"}
// //         </p>
// //         <p>
// //           <strong>Modèle :</strong> {formData.modele || "Non renseigné"}
// //         </p>
// //         <p>
// //           <strong>Année :</strong> {formData.annee || "Non renseigné"}
// //         </p>
// //         <p>
// //           <strong>Couleur :</strong> {formData.couleur || "Non renseigné"}
// //         </p>

// //         <h2 style={{ color: "#63b3ed", marginTop: "20px" }}>
// //           Prix estimé :
// //         </h2>
// //         <p style={{ fontSize: "24px", fontWeight: "bold" }}>
// //           {averagePrice ? `${averagePrice} €` : "Non disponible"}
// //         </p>
// //         <button 
// //             type="submit" 
// //             className="btn"
// //             onClick={() => window.location.replace("/")}>
// //             Retour au formulaire
// //         </button>
// //       </div>
     
// //     </div>
// //   );
// // }

// // pages/result.js
// import React from "react";

// export async function getServerSideProps(context) {
//   const { query } = context;

//   // Extract parameters from the query
//   const formData = query.formData ? JSON.parse(query.formData) : null;
//   const averagePrice = query.average_price || null;

//   // Handle invalid or missing query parameters
//   if (!formData || !averagePrice) {
//     return {
//       notFound: true, // Redirect to the 404 page if parameters are missing
//     };
//   }

//   return {
//     props: {
//       formData,
//       averagePrice,
//     },
//   };
// }

// export default function Result({ formData, averagePrice }) {
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

//         <h2 style={{ color: "#63b3ed", marginTop: "20px" }}>Prix estimé :</h2>
//         <p style={{ fontSize: "24px", fontWeight: "bold" }}>
//           {averagePrice ? `${averagePrice} €` : "Non disponible"}
//         </p>
//         <button
//           type="submit"
//           className="btn"
//           onClick={() => (window.location.href = "/")}
//         >
//           Retour au formulaire
//         </button>
//       </div>
//     </div>
//   );
// }
