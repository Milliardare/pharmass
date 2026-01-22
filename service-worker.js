const CACHE_NAME = "pharmas-v4";

const FILES_TO_CACHE = [
  "/pharmass/",
  "/pharmass/index.html",
  "/pharmass/welcome.html",
  "/pharmass/about.html",
  "/pharmass/boutique.html",
  "/pharmass/order.html",
  "/pharmass/pharmacies.html",
  "/pharmass/contact.html",
  "/pharmass/offline.html",

  // CSS
  "/pharmass/css/welcome.css",
  "/pharmass/css/pharmacies.css",
  "/pharmass/css/about.css",
  "/pharmass/css/boutique.css",
  "/pharmass/css/contact.css",
  "/pharmass/css/order.css",

  // JS
  "/pharmass/js/main.js",
  "/pharmass/js/welcome.js",
  "/pharmass/js/pharmacies.js",
  "/pharmass/js/about.js",
  "/pharmass/js/boutique.js",
  "/pharmass/js/contact.js",
  "/pharmass/js/order.js",

  // Images
  "/pharmass/img/logo-192.png",
  "/pharmass/img/logo-512.png",
  "/pharmass/img/servente.jpg",
  "/pharmass/img/para.jpg",
  "/pharmass/img/moto.jpg"
];

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match("/pharmass/offline.html")
    )
  );
});



// // ================================
// // PHARMAS – SERVICE WORKER (OK)
// // ================================

// const CACHE_NAME = "pharmas-v3";

// const FILES_TO_CACHE = [
//   "./",
//   "./index.html",
//   "./welcome.html",
//   "./about.html",
//   "./boutique.html",
//   "./order.html",
//   "./pharmacies.html",
//   "./contact.html",
//   "./offline.html",

//   // CSS
//   "./css/welcome.css",
//   "./css/pharmacies.css",
//   "./css/about.css",
//   "./css/boutique.css",
//   "./css/contact.css",
//   "./css/order.css",

//   // JS
//   "./js/main.js",
//   "./js/welcome.js",
//   "./js/pharmacies.js",
//   "./js/about.js",
//   "./js/boutique.js",
//   "./js/contact.js",
//   "./js/order.js",

//   // Images
//   "./img/logo-192.png",
//   "./img/logo-512.png",
//   "./img/servente.jpg",
//   "./img/para.jpg",
//   "./img/moto.jpg",

//   // Médicaments
//   "./img/medicaments/paracetamol.jpg",
//   "./img/medicaments/ibuprofene.jpg",
//   "./img/medicaments/sirop-toux.jpg",
//   "./img/medicaments/sirop-enfant.jpg",
//   "./img/medicaments/creme-dermique.jpg",
//   "./img/medicaments/pommade.jpg",
//   "./img/medicaments/gel-hydroalcoolique.jpg",
//   "./img/medicaments/savon-antiseptique.jpg",
//   "./img/medicaments/vitamine-c.jpg",
//   "./img/medicaments/multivitamines.jpg",
//   "./img/medicaments/thermometre.jpg",
//   "./img/medicaments/couche-bebe.jpg",
//   "./img/medicaments/lait-infantile.jpg",
//   "./img/medicaments/bandes-compresses.jpg",
//   "./img/medicaments/brosse-dents.jpg",
//   "./img/medicaments/dentifrice.jpg",
//   "./img/medicaments/fer-acide-folique.jpg"
// ];

// // INSTALL
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
//   );
//   self.skipWaiting();
// });

// // ACTIVATE
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((keys) =>
//       Promise.all(keys.map((key) => {
//         if (key !== CACHE_NAME) return caches.delete(key);
//       }))
//     )
//   );
//   self.clients.claim();
// });
// // FETCH
// self.addEventListener("fetch", (event) => {
//   // Pour les pages HTML (navigation)
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       fetch(event.request).catch(() => caches.match("./offline.html"))
//     );
//     return;
//   }

//   // Pour les autres fichiers (CSS, JS, images)
//   event.respondWith(
//     caches.match(event.request).then((response) => response || fetch(event.request))
//   );
// });


// // FETCH
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request).catch(() => {
//         if (event.request.mode === "navigate") {
//           return caches.match("./offline.html");
//         }
//       });
//     })
//   );
// });



// // ================================
// // PHARMAS – SERVICE WORKER (GITHUB PAGES)
// // Repo : /pharmass/
// // ================================

// // Version du cache
// const CACHE_NAME = "pharmas-v2";

// // Tous les fichiers à mettre en cache
// const FILES_TO_CACHE = [
//   // HTML
//   "/pharmass/",
//   "/pharmass/index.html",
//   "/pharmass/welcome.html",
//   "/pharmass/about.html",
//   "/pharmass/boutique.html",
//   "/pharmass/order.html",
//   "/pharmass/pharmacies.html",
//   "/pharmass/contact.html",
//   "/pharmass/offline.html",

//   // CSS
//   "/pharmass/css/welcome.css",
//   "/pharmass/css/pharmacies.css",
//   "/pharmass/css/about.css",
//   "/pharmass/css/boutique.css",
//   "/pharmass/css/contact.css",
//   "/pharmass/css/order.css",

//   // JS
//   "/pharmass/js/main.js",
//   "/pharmass/js/welcome.js",
//   "/pharmass/js/pharmacies.js",
//   "/pharmass/js/about.js",
//   "/pharmass/js/boutique.js",
//   "/pharmass/js/contact.js",
//   "/pharmass/js/order.js",

//   // Images principales
//   "/pharmass/img/logo-192.png",
//   "/pharmass/img/logo-512.png",
//   "/pharmass/img/servente.jpg",
//   "/pharmass/img/para.jpg",
//   "/pharmass/img/moto.jpg",

//   // Médicaments
//   "/pharmass/img/medicaments/paracetamol.jpg",
//   "/pharmass/img/medicaments/ibuprofene.jpg",
//   "/pharmass/img/medicaments/sirop-toux.jpg",
//   "/pharmass/img/medicaments/sirop-enfant.jpg",
//   "/pharmass/img/medicaments/creme-dermique.jpg",
//   "/pharmass/img/medicaments/pommade.jpg",
//   "/pharmass/img/medicaments/gel-hydroalcoolique.jpg",
//   "/pharmass/img/medicaments/savon-antiseptique.jpg",
//   "/pharmass/img/medicaments/vitamine-c.jpg",
//   "/pharmass/img/medicaments/multivitamines.jpg",
//   "/pharmass/img/medicaments/thermometre.jpg",
//   "/pharmass/img/medicaments/couche-bebe.jpg",
//   "/pharmass/img/medicaments/lait-infantile.jpg",
//   "/pharmass/img/medicaments/bandes-compresses.jpg",
//   "/pharmass/img/medicaments/brosse-dents.jpg",
//   "/pharmass/img/medicaments/dentifrice.jpg",
//   "/pharmass/img/medicaments/fer-acide-folique.jpg"
// ];

// // INSTALL
// self.addEventListener("install", (event) => {
//   console.log("[SW] Install");
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(FILES_TO_CACHE);
//     })
//   );
//   self.skipWaiting();
// });

// // ACTIVATE
// self.addEventListener("activate", (event) => {
//   console.log("[SW] Activate");
//   event.waitUntil(
//     caches.keys().then((keys) =>
//       Promise.all(
//         keys.map((key) => {
//           if (key !== CACHE_NAME) {
//             return caches.delete(key);
//           }
//         })
//       )
//     )
//   );
//   self.clients.claim();
// });

// // FETCH
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) return response;

//       return fetch(event.request).catch(() => {
//         if (event.request.mode === "navigate") {
//           return caches.match("/pharmass/offline.html");
//         }
//       });
//     })
//   );
// });


// // Version du cache
// const CACHE_NAME = "pharmas-v2";

// // Fichiers à mettre en cache (CHEMINS RELATIFS)
// const FILES_TO_CACHE = [
//   "./",
//   "./index.html",
//   "./welcome.html",
//   "./about.html",
//   "./boutique.html",
//   "./order.html",
//   "./pharmacies.html",
//   "./contact.html",
//   "./offline.html",

//   // CSS
//   "./css/welcome.css",
//   "./css/pharmacies.css",
//   "./css/about.css",
//   "./css/boutique.css",
//   "./css/contact.css",
//   "./css/order.css",

//   // JS
//   "./js/main.js",
//   "./js/welcome.js",
//   "./js/pharmacies.js",
//   "./js/about.js",
//   "./js/boutique.js",
//   "./js/contact.js",
//   "./js/order.js",

//   // Images principales
//   "./img/logo-192.png",
//   "./img/logo-512.png",
//   "./img/servente.jpg",
//   "./img/para.jpg",
//   "./img/moto.jpg",

//   // Médicaments
//   "./img/medicaments/paracetamol.jpg",
//   "./img/medicaments/ibuprofene.jpg",
//   "./img/medicaments/sirop-toux.jpg",
//   "./img/medicaments/sirop-enfant.jpg",
//   "./img/medicaments/creme-dermique.jpg",
//   "./img/medicaments/pommade.jpg",
//   "./img/medicaments/gel-hydroalcoolique.jpg",
//   "./img/medicaments/savon-antiseptique.jpg",
//   "./img/medicaments/vitamine-c.jpg",
//   "./img/medicaments/multivitamines.jpg",
//   "./img/medicaments/thermometre.jpg",
//   "./img/medicaments/couche-bebe.jpg",
//   "./img/medicaments/lait-infantile.jpg",
//   "./img/medicaments/bandes-compresses.jpg",
//   "./img/medicaments/brosse-dents.jpg",
//   "./img/medicaments/dentifrice.jpg",
//   "./img/medicaments/fer-acide-folique.jpg"
// ];

// // INSTALL
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
//   );
//   self.skipWaiting();
// });

// // ACTIVATE
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((keys) =>
//       Promise.all(
//         keys.map((key) => {
//           if (key !== CACHE_NAME) return caches.delete(key);
//         })
//       )
//     )
//   );
//   self.clients.claim();
// });

// // FETCH
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return (
//         response ||
//         fetch(event.request).catch(() => {
//           if (event.request.mode === "navigate") {
//             return caches.match("./offline.html");
//           }
//         })
//       );
//     })
//   );
// });






// // Version du cache
// const CACHE_NAME = "pharmas-v1";

// // Tous les fichiers à mettre en cache
// const FILES_TO_CACHE = [
//   "/",
//   // HTML
//   "/index.html",
//   "/about.html",
//   "/boutique.html",
//   "/order.html",
//   "/pharmacies.html",
//   "/contact.html",
//   "/welcome.html",
//   "/offline.html",

//   // CSS
//   "/css/welcome.css",
//   "/css/pharmacies.css",
//   "/css/about.css",
//   "/css/boutique.css",
//   "/css/contact.css",
//   "/css/order.css",

//   // JS
//   "/js/main.js",
//   "/js/welcome.js",
//   "/js/pharmacies.js",
//   "/js/about.js",
//   "/js/boutique.js",
//   "/js/contact.js",
//   "/js/order.js",

//   // Images
//   "/img/Doliprane.jpg",
//   "/img/logo-192.png",
//   "/img/logo-512.png",
//   "/img/medicament.jpg",
//   "/img/moto.jpg",
//   "/img/para.jpg",
//   "/img/pharmas.png",
//   "/img/pharmasfemme.png",
//   "/img/servente.jpg",
// "/img/medicaments/paracetamol.jpg",
// "/img/medicaments/ibuprofene.jpg",
// "/img/medicaments/sirop-toux.jpg",
// "/img/medicaments/sirop-enfant.jpg",
// "/img/medicaments/creme-dermique.jpg",
// "/img/medicaments/pommade.jpg",
// "/img/medicaments/gel-hydroalcoolique.jpg",
// "/img/medicaments/savon-antiseptique.jpg",
// "/img/medicaments/vitamine-c.jpg",
// "/img/medicaments/multivitamines.jpg",
// "/img/medicaments/thermometre.jpg",
// "/img/medicaments/couche-bebe.jpg",
// " img/medicaments/lait-infantile.jpg",
// " img/medicaments/bandes-compresses.jpg",
// "img/medicaments/brosse-dents.jpg",
// "img/medicaments/dentifrice.jpg",
// "img/medicaments/fer-acide-folique.jpg",

// ];

// // Installer le service worker et mettre en cache les fichiers
// self.addEventListener("install", (event) => {
//   console.log("[ServiceWorker] Install");
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("[ServiceWorker] Caching app shell");
//       return cache.addAll(FILES_TO_CACHE);
//     })
//   );
//   self.skipWaiting();
// });

// // Activer le service worker et nettoyer les anciens caches
// self.addEventListener("activate", (event) => {
//   console.log("[ServiceWorker] Activate");
//   event.waitUntil(
//     caches.keys().then((keyList) => {
//       return Promise.all(
//         keyList.map((key) => {
//           if (key !== CACHE_NAME) {
//             console.log("[ServiceWorker] Removing old cache", key);
//             return caches.delete(key);
//           }
//         })
//       );
//     })
//   );
//   self.clients.claim();
// });

// // Intercepter les requêtes et servir le cache si offline
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response; // retourne le cache si trouvé
//       }
//       return fetch(event.request)
//         .catch(() => {
//           // Si hors-ligne et fichier HTML demandé, retourne offline.html
//           if (event.request.mode === "navigate") {
//             return caches.match("offline.html");
//           }
//         });
//     })
//   );
// });

