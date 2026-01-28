const pharmacies = [
  {
    name: "Pharmacie Centrale",
    location: "Libreville - Centre-ville, près du marché Mont-Bouët",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie de l’Orchidée",
    location: "Libreville - Quartier Louis, à côté de l’Hôtel Hibiscus",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie Sainte-Marie",
    location: "Libreville - Montagne Sainte, proche de l’église Sainte-Marie",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie Montagne Sainte",
    location: "Libreville - Quartier Montagne Sainte",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie de la Gare Routière",
    location: "Libreville - Vers Gare Routière de Libreville",
    imagePath: "img/a.jpg",
    openHour: "07:30",
    closeHour: "21:00",
  },
  {
    name: "Pharmacie Akanda Santé",
    location: "Akanda - Derrière la clinique Medivision, Okala",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "19:00",
  },
  {
    name: "Pharmacie de Franceville Centre",
    location: "Franceville - Centre-ville, près du marché",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "19:00",
  },
  {
    name: "Pharmacie Les Marguerites",
    location: "Libreville - Quartier Charbonnages",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie Royale",
    location: "Libreville - Derrière École Publique de Dragages",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie d’Awondo",
    location: "Libreville - Quartier Awondo, proche station PetroGabon",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie de Sibang-Montalier",
    location: "Libreville - Sibang, à côté du centre de santé Montalier",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "19:00",
  },
  {
    name: "Pharmacie d’Acaé",
    location: "Libreville - Quartier Acaé",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "19:00",
  },
  {
    name: "Pharmacie d’Okala",
    location: "Akanda - Okala, près du Carrefour Okala",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "21:00",
  },
  {
    name: "Pharmacie de Nkembé",
    location: "Libreville - Quartier Nkembé, non loin de l’Église Adventiste",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "19:00",
  },
  {
    name: "Pharmacie Mbolo",
    location: "Port-Gentil - Vers le centre commercial Mbolo",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie des Charbonnages",
    location:
      "Libreville - Quartier Charbonnages, près de l’ancienne station BP",
      imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Grande Pharmacie des Forestiers",
    location: "Libreville - Galerie Mbolo",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "19:30",
  },
  {
    name: "Pharmacie Avolenzame",
    location: "Nkembo, Libreville – route Atong Abè",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "19:00",
  },
  {
    name: "Pharmacie de la Grâce",
    location: "Angondjé, Libreville",
    imagePath: "img/a.jpg",
    openHour: "00:00",
    closeHour: "23:59",
  },
  {
    name: "Pharmacie du Lycée Technique",
    location: "Owendo - Avant le lycée technique",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "18:30",
  },
  {
    name: "Pharmacie derrière l’Hôpital",
    location: "Libreville - Quartier derrière l’hôpital",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie de la Poste",
    location: "Libreville - Galerie Hollando, bord de mer",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "19:00",
  },
  {
    name: "Pharmacie de Glass",
    location: "Glass, Libreville - Carrefour Glass",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
  {
    name: "Pharmacie de la Plaine Niger",
    location: "Carrefour Boulingui, Libreville",
    imagePath: "img/a.jpg",
    openHour: "08:00",
    closeHour: "20:00",
  },
];

const pharmacyList = document.getElementById("pharmacyList");
const modal = document.getElementById("pharmacyModal");
const modalBody = document.getElementById("modalBody");

function renderPharmacies(list) {
  pharmacyList.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "pharmacy-card";
    card.innerHTML = `
      <img src="${p.imagePath}">
      <div class="pharmacy-info">
        <h3>${p.name}</h3>
        <p>${p.location}</p>
      </div>
    `;
    card.onclick = () => showModal(p);
    pharmacyList.appendChild(card);
  });
}

function filterPharmacies() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  renderPharmacies(
    pharmacies.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
    )
  );
}

function showModal(p) {
  modal.style.display = "block";
  modalBody.innerHTML = `
    <img src="${p.imagePath}">
    <h3>${p.name}</h3>
    <p>📍 ${p.location}</p>
    <p>⏰ ${p.openHour} - ${p.closeHour}</p>
    <button onclick="orderFromPharmacy('${p.name}')">Commander</button>

  `;
}

function closeModal() {
  modal.style.display = "none";
}

function navigate(page) {
  window.location.href = "/pharmass/" + page;
}

// function navigate(page) {
//   window.location.href = page;
// }

renderPharmacies(pharmacies);




function orderFromPharmacy(pharmacyName) {
  const url = "/pharmass/order.html?pharmacie=" + encodeURIComponent(pharmacyName);
  window.location.href = url;
}
// bouton retour
function retour() { if (window.history.length > 1) { window.history.back(); } else { window.location.href = "/pharmass/index.html"; } }


// const pharmacies = [
//   {
//     name: "Pharmacie Libreville",
//     location: "Libreville",
//     imagePath: "img/moto.jpg",
//     openHour: "08:00",
//     closeHour: "20:00",
//   },
//   {
//     name: "Pharmacie Akanda",
//     location: "Akanda",
//     imagePath: "assets/images/log.jpg",
//     openHour: "09:00",
//     closeHour: "19:00",
//   },
//   {
//     name: "Pharmacie Centre",
//     location: "Centre-ville",
//     imagePath: "assets/images/log.jpg",
//     openHour: "07:00",
//     closeHour: "22:00",
//   },
//   {
//     name: "Pharmacie Avorbam",
//     location: "Akanda/avorbam",
//     imagePath: "assets/images/log.jpg",
//     openHour: "07:00",
//     closeHour: "24:00",
//   },
// ];

// const pharmacyList = document.getElementById("pharmacyList");
// const modal = document.getElementById("pharmacyModal");
// const modalBody = document.getElementById("modalBody");

// function renderPharmacies(list) {
//   pharmacyList.innerHTML = "";
//   list.forEach((p, i) => {
//     const card = document.createElement("div");
//     card.className = "pharmacy-card";
//     card.innerHTML = `
//         <img src="${p.imagePath}" alt="${p.name}">
//         <div class="pharmacy-info">
//           <h3>${p.name}</h3>
//           <p>${p.location}</p>
//         </div>
//       `;
//     card.onclick = () => showModal(p);
//     pharmacyList.appendChild(card);
//   });
// }

// // Filtrage recherche
// function filterPharmacies() {
//   const query = document.getElementById("searchInput").value.toLowerCase();
//   const filtered = pharmacies.filter(
//     (p) =>
//       p.name.toLowerCase().includes(query) ||
//       p.location.toLowerCase().includes(query)
//   );
//   renderPharmacies(filtered);
// }

// // Modal pharmacie
// function showModal(p) {
//   modal.style.display = "block";
//   modalBody.innerHTML = `
//       <img src="${p.imagePath}" alt="${p.name}">
//       <h3>${p.name}</h3>
//       <p>📍 ${p.location}</p>
//       <p>⏰ ${p.openHour} - ${p.closeHour}</p>
//       <p>Nous vérifions la disponibilité et organisons la livraison pour vous.</p>
//       <button onclick="navigate('order.html')">🛒 Commander</button>
//     `;
// }

// function closeModal() {
//   modal.style.display = "none";
// }

// // Navigation pages
// function navigate(page) {
//   window.location.href = page;
// }

// // Initial render
// renderPharmacies(pharmacies);
