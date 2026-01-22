function enterApp() {
  // redirection vers la page suivante (similaire à Navigator.pushReplacement)
  window.location.href = "./welcome.html";; // crée une page welcome.html
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
} 