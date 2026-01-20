// Version du cache
const CACHE_NAME = "pharmas-v1";

// Tous les fichiers à mettre en cache
const FILES_TO_CACHE = [
  "/",
  // HTML
  "/index.html",
  "/about.html",
  "/boutique.html",
  "/order.html",
  "/pharmacies.html",
  "/contact.html",
  "/welcome.html",
  "/offline.html",

  // CSS
  "/css/welcome.css",
  "/css/pharmacies.css",
  "/css/about.css",
  "/css/boutique.css",
  "/css/contact.css",
  "/css/order.css",

  // JS
  "/js/main.js",
  "/js/welcome.js",
  "/js/pharmacies.js",
  "/js/about.js",
  "/js/boutique.js",
  "/js/contact.js",
  "/js/order.js",

  // Images
  "/img/Doliprane.jpg",
  "/img/logo-192.png",
  "/img/logo-512.png",
  "/img/medicament.jpg",
  "/img/moto.jpg",
  "/img/para.jpg",
  "/img/pharmas.png",
  "/img/pharmasfemme.png",
  "/img/servente.jpg",
"/img/medicaments/paracetamol.jpg",
"/img/medicaments/ibuprofene.jpg",
"/img/medicaments/sirop-toux.jpg",
"/img/medicaments/sirop-enfant.jpg",
"/img/medicaments/creme-dermique.jpg",
"/img/medicaments/pommade.jpg",
"/img/medicaments/gel-hydroalcoolique.jpg",
"/img/medicaments/savon-antiseptique.jpg",
"/img/medicaments/vitamine-c.jpg",
"/img/medicaments/multivitamines.jpg",
"/img/medicaments/thermometre.jpg",
"/img/medicaments/couche-bebe.jpg",
" img/medicaments/lait-infantile.jpg",
" img/medicaments/bandes-compresses.jpg",
"img/medicaments/brosse-dents.jpg",
"img/medicaments/dentifrice.jpg",
"img/medicaments/fer-acide-folique.jpg",

];

// Installer le service worker et mettre en cache les fichiers
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activer le service worker et nettoyer les anciens caches
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepter les requêtes et servir le cache si offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // retourne le cache si trouvé
      }
      return fetch(event.request)
        .catch(() => {
          // Si hors-ligne et fichier HTML demandé, retourne offline.html
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        });
    })
  );
});

