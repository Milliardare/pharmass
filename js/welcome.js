// function navigate(page) {
//   window.location.href = page;
// }

function navigate(page) {
  window.location.href = "/pharmass/" + page;
}

function openPharmacien() {
  const numero = "241074224966"; // ton numéro
  const message = encodeURIComponent(
    "Bonjour, j’aimerais discuter avec un pharmacien via Pharmas."
  );
  window.open(`https://wa.me/${numero}?text=${message}`, "_blank");
}
// ici c est pour l installation de l application
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const banner = document.getElementById('installBanner');
  banner.style.display = 'block'; // Affiche le message en haut

  banner.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Utilisateur a installé l’application');
      }
      deferredPrompt = null;
      banner.style.display = 'none'; // Cache le message après installation
    });
  });
});