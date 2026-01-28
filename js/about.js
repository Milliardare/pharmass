// Fonction de navigation générique
function navigate(page) {
    window.location.href = "/pharmass/" + page;
  }
  
  // Fonction retour pour la page About
  function retour() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Si pas d'historique, retour vers l'accueil de ton PWA
      window.location.href = "/pharmass/index.html";
    }
  }
  
  // Initialisation de la page About
  function initAboutPage() {
    console.log("Page About chargée !");
    // Ici tu peux mettre du code spécifique à ta page About
    // Par exemple charger du contenu dynamique, gérer des animations, etc.
  }
  
  // Exécuter au chargement de la page
  document.addEventListener("DOMContentLoaded", initAboutPage);
  


// // Fonction retour pour la page About
// function navigate(page) {
//     window.location.href = "/pharmass/" + page;
//   }


// function retour() {
//     if (window.history.length > 1) {
//       window.history.back();
//     } else {
//       // Si pas d'historique, retour vers l'accueil de ton PWA
//       window.location.href = "/pharmass/index.html";
//     }
//   }
  
//   // Exemple : tu peux ajouter d'autres fonctions propres à la page About
//   function initAboutPage() {
//     console.log("Page About chargée !");
//     // Ici tu peux mettre du code spécifique à ta page About
//     // Par exemple charger du contenu dynamique, gérer des animations, etc.
//   }
  
//   // Exécuter au chargement de la page
//   document.addEventListener("DOMContentLoaded", initAboutPage);
  
  
// // bouton retour
// function retour() { if (window.history.length > 1) { window.history.back(); } else { window.location.href = "/pharmass/index.html"; } }