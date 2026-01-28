/*************************************************
 * 1️⃣ CATÉGORIES
 *************************************************/
const categories = [
  "Toutes",
  "Douleurs & Fièvre",
  "Toux & Rhume",
  "Peau & Crèmes",
  "Hygiène",
  "Vitamines & Compléments",
  "Médicaments",
  "Parapharmacie",
  "Enfants",
];

/*************************************************
 * 2️⃣ PARAMÈTRES LIVRAISON
 *************************************************/
const RETRAIT_PRIX = 200;   // Retrait en pharmacie
const LIVRAISON_PRIX = 3000; // Livraison à domicile

/*************************************************
 * 3️⃣ PRODUITS (AVEC PRIX)
 *************************************************/
const products = [
  {
    nom: "Paracétamol 500mg",
    categorie: "Douleurs & Fièvre",
    description: "Soulage la fièvre et les douleurs légères à modérées.",
    prix: 1200,
    imageUrl: "img/medicaments/paracetamol.jpg",
  },
  {
    nom: "Ibuprofène 400mg",
    categorie: "Douleurs & Fièvre",
    description: "Anti-inflammatoire pour douleurs et inflammations.",
    prix: 1000,
    imageUrl: "img/medicaments/ibuprofene.jpg",
  },
  {
    nom: "Sirop contre la toux",
    categorie: "Toux & Rhume",
    description: "Apaise la toux sèche et grasse.",
    prix: 1500,
    imageUrl: "img/medicaments/sirop-toux.jpg",
  },
  {
    nom: "Sirop Enfant",
    categorie: "Enfants",
    description: "Sirop adapté aux enfants contre fièvre et rhume.",
    prix: 2200,
    imageUrl: "img/medicaments/sirop-enfant.jpg",
  },
  {
    nom: "Crème dermatologique",
    categorie: "Peau & Crèmes",
    description: "Traitement des irritations et démangeaisons.",
    prix: 1800,
    imageUrl: "img/medicaments/creme-dermique.jpg",
  },
  {
    nom: "Pommade cicatrisante",
    categorie: "Peau & Crèmes",
    description: "Favorise la cicatrisation des plaies.",
    prix: 2000,
    imageUrl: "img/medicaments/pommade.jpg",
  },
  {
    nom: "Gel hydroalcoolique",
    categorie: "Hygiène",
    description: "Désinfection rapide des mains sans eau.",
    prix: 1200,
    imageUrl: "img/medicaments/gel-hydroalcoolique.jpg",
  },
  {
    nom: "Savon antiseptique",
    categorie: "Hygiène",
    description: "Protection contre les bactéries.",
    prix: 800,
    imageUrl: "img/medicaments/savon-antiseptique.jpg",
  },
  {
    nom: "Vitamine C",
    categorie: "Vitamines & Compléments",
    description: "Renforce le système immunitaire.",
    prix: 2000,
    imageUrl: "img/medicaments/vitamine-c.jpg",
  },
  {
    nom: "Multivitamines",
    categorie: "Vitamines & Compléments",
    description: "Apport complet en vitamines essentielles.",
    prix: 3500,
    imageUrl: "img/medicaments/multivitamines.jpg",
  },
  {
    nom: "Thermomètre digital",
    categorie: "Parapharmacie",
    description: "Mesure rapide et précise de la température.",
    prix: 4000,
    imageUrl: "img/medicaments/thermometre.jpg",
  },
  {
    nom: "Couches bébé",
    categorie: "Enfants",
    description: "Couches confortables pour nourrissons.",
    prix: 5000,
    imageUrl: "img/medicaments/couche-bebe.jpg",
  },
  {
    nom: "Dentifrice",
    categorie: "Parapharmacie",
    description: "Pour une bonne hygiène bucco‑dentaire.",
    prix: 1300,
    imageUrl: "img/medicaments/dentifrice.jpg",
  },
  {
    nom: "Brosse à dents",
    categorie: "Parapharmacie",
    description: "Brosse à dents standard.",
    prix: 800,
    imageUrl: "img/medicaments/brosse-dents.jpg",
  },
  {
    nom: "Bandes compresses stériles",
    categorie: "Parapharmacie",
    description: "Pour panser coupures et petites plaies.sdfjkqekjslef:sblkfdhsvid flqbksf qsvkdbsvjkldbfjqbkfjqs jkfb qslvqskjvqjlskfbqvhsbflqvsblfjvqsjfvqsjfvq",
    prix: 1500,
    imageUrl: "img/medicaments/bandes-compresses.jpg",
  },

  {
    nom: "Lait infantile",
    categorie: "Enfants",
    description: "Nutrition adaptée pour bébés.",
    prix: 8000,
    imageUrl: "img/medicaments/lait-infantile.jpg",
  },
  {
    nom: "Métoclopramide",
    categorie: "Médicaments",
    description: "Antinauséeux pour troubles digestifs.",
    prix: 1800,
    imageUrl: "img/medicaments/metoclopramide.jpg",
  },
  {
    nom: "Antibiotique A (sur ordonnance)",
    categorie: "Médicaments",
    description: "Antibiotique à usage spécifique (sur ordonnance).",
    prix: 2500,
    imageUrl: "img/medicaments/antibiotique.jpg",
  },

{
  nom: "Paracétamol Effervescent",
  categorie: "Douleurs & Fièvre",
  description: "Comprimés effervescents pour douleurs et fièvre.",
  prix: 1200,
  imageUrl: "img/medicaments/paracetamol-effervescent.jpg",
},
];

/*************************************************
 * 4️⃣ VARIABLES UI
 *************************************************/
let selectedCategory = "Toutes";
let selectedDeliveryMode = "retrait";

const productsGrid = document.getElementById("productsGrid");
const categoryContainer = document.getElementById("categoryContainer");
const searchInput = document.getElementById("searchInput");
const productModal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");

/*************************************************
 * 5️⃣ CATÉGORIES UI
 *************************************************/
categories.forEach((cat) => {
  const btn = document.createElement("button");
  btn.className = "category-btn";
  btn.innerText = cat;
  if (cat === selectedCategory) btn.classList.add("selected");

  btn.onclick = () => {
    selectedCategory = cat;
    updateCategoryButtons();
    renderProducts();
  };

  categoryContainer.appendChild(btn);
});

function updateCategoryButtons() {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.toggle("selected", btn.innerText === selectedCategory);
  });
}

/*************************************************
 * 6️⃣ PRODUITS
 *************************************************/
function renderProducts() {
  const query = searchInput.value.toLowerCase();
  productsGrid.innerHTML = "";

  products
    .filter(
      (p) =>
        (selectedCategory === "Toutes" || p.categorie === selectedCategory) &&
        p.nom.toLowerCase().includes(query)
    )
    .forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.imageUrl}">
        <p><strong>${p.nom}</strong></p>
        <p>${p.prix} FCFA</p>
      `;
      card.onclick = () => openProductModal(p);
      productsGrid.appendChild(card);
    });
}

/*************************************************
 * 7️⃣ MODAL PRODUIT
 *************************************************/
function openProductModal(p) {
  productModal.style.display = "block";
  selectedDeliveryMode = "retrait";

  modalBody.innerHTML = `
    <img src="${p.imageUrl}">
    <h3>${p.nom}</h3>
    <p>${p.description}</p>

    <p><strong>Prix :</strong> ${p.prix} FCFA</p>

    <label>
      <input type="radio" name="delivery" checked
        onclick="setDeliveryMode('retrait', ${p.prix})">
      🏥 Retrait en pharmacie (+${RETRAIT_PRIX} FCFA)
    </label><br>

    <label>
      <input type="radio" name="delivery"
        onclick="setDeliveryMode('livraison', ${p.prix})">
      🚚 Livraison à domicile (+${LIVRAISON_PRIX} FCFA)
    </label>

    <p id="totalPrice"><strong>Total :</strong> ${p.prix + RETRAIT_PRIX} FCFA</p>

    <button onclick="orderWhatsapp('${p.nom}', ${p.prix}, '${p.description}')">
      🛒 Commander via WhatsApp
    </button>
  `;
}

function setDeliveryMode(mode, prixProduit) {
  selectedDeliveryMode = mode;
  const livraison =
    mode === "livraison" ? LIVRAISON_PRIX : RETRAIT_PRIX;

  document.getElementById(
    "totalPrice"
  ).innerHTML = `<strong>Total :</strong> ${prixProduit + livraison} FCFA`;
}

function closeModal() {
  productModal.style.display = "none";
}

/*************************************************
 * 8️⃣ COMMANDE WHATSAPP
 *************************************************/
function orderWhatsapp(productName, prixProduit) {
  const livraison =
    selectedDeliveryMode === "livraison"
      ? LIVRAISON_PRIX
      : RETRAIT_PRIX;

  const total = prixProduit + livraison;

  const numero = "241074224966";
  const message = encodeURIComponent(
    `Bonjour, je souhaite commander :
- Produit : ${productName}
- Description : ${description}
- Prix : ${prixProduit} FCFA
- Mode : ${selectedDeliveryMode === "livraison" ? "Livraison à domicile" : "Retrait en pharmacie"}
- Frais : ${livraison} FCFA
- Total : ${total} FCFA`
  );

  window.open(`https://wa.me/${numero}?text=${message}`, "_blank");
}

renderProducts();
// bouton retour
function retour() { if (window.history.length > 1) { window.history.back(); } else { window.location.href = "/pharmass/index.html"; } }



// const categories = [
//   "Toutes",
//   "Douleurs & Fièvre",
//   "Toux & Rhume",
//   "Peau & Crèmes",
//   "Hygiène",
//   "Vitamines & Compléments",
//   "Médicaments",
//   "Parapharmacie",
//   "Enfants",
// ];
// const products = [
//   {
//     nom: "Paracétamol 500mg",
//     categorie: "Douleurs & Fièvre",
//     description: "Soulage la fièvre et les douleurs légères à modérées.",
//     imageUrl: "img/medicaments/paracetamol.jpg",
//   },
//   {
//     nom: "Ibuprofène 400mg",
//     categorie: "Douleurs & Fièvre",
//     description: "Anti-inflammatoire pour douleurs et inflammations.",
//     imageUrl: "img/medicaments/ibuprofene.jpg",
//   },
//   {
//     nom: "Sirop contre la toux",
//     categorie: "Toux & Rhume",
//     description: "Apaise la toux sèche et grasse.",
//     imageUrl: "img/medicaments/sirop-toux.jpg",
//   },
//   {
//     nom: "Sirop Enfant",
//     categorie: "Enfants",
//     description: "Sirop adapté aux enfants contre fièvre et rhume.",
//     imageUrl: "img/medicaments/sirop-enfant.jpg",
//   },
//   {
//     nom: "Crème dermatologique",
//     categorie: "Peau & Crèmes",
//     description: "Traitement des irritations et démangeaisons.",
//     imageUrl: "img/medicaments/creme-dermique.jpg",
//   },
//   {
//     nom: "Pommade cicatrisante",
//     categorie: "Peau & Crèmes",
//     description: "Favorise la cicatrisation des plaies.",
//     imageUrl: "img/medicaments/pommade.jpg",
//   },
//   {
//     nom: "Gel hydroalcoolique",
//     categorie: "Hygiène",
//     description: "Désinfection rapide des mains sans eau.",
//     imageUrl: "img/medicaments/gel-hydroalcoolique.jpg",
//   },
//   {
//     nom: "Savon antiseptique",
//     categorie: "Hygiène",
//     description: "Nettoyage et protection contre les bactéries.",
//     imageUrl: "img/medicaments/savon-antiseptique.jpg",
//   },
//   {
//     nom: "Vitamine C",
//     categorie: "Vitamines & Compléments",
//     description: "Renforce le système immunitaire.",
//     imageUrl: "img/medicaments/vitamine-c.jpg",
//   },
//   {
//     nom: "Multivitamines",
//     categorie: "Vitamines & Compléments",
//     description: "Apport complet en vitamines essentielles.",
//     imageUrl: "img/medicaments/multivitamines.jpg",
//   },
//   {
//     nom: "Thermomètre digital",
//     categorie: "Parapharmacie",
//     description: "Mesure rapide et précise de la température.",
//     imageUrl: "img/medicaments/thermometre.jpg",
//   },
//   {
//     nom: "Couches bébé",
//     categorie: "Enfants",
//     description: "Couches confortables pour nourrissons.",
//     imageUrl: "img/medicaments/couche-bebe.jpg",
//   },
// ];

// let selectedCategory = "Toutes";

// const productsGrid = document.getElementById("productsGrid");
// const categoryContainer = document.getElementById("categoryContainer");
// const searchInput = document.getElementById("searchInput");
// const productModal = document.getElementById("productModal");
// const modalBody = document.getElementById("modalBody");

// /* Categories */
// categories.forEach(cat => {
//   const btn = document.createElement("button");
//   btn.className = "category-btn";
//   btn.innerText = cat;
//   if (cat === selectedCategory) btn.classList.add("selected");

//   btn.onclick = () => {
//     selectedCategory = cat;
//     updateCategoryButtons();
//     renderProducts();
//   };

//   categoryContainer.appendChild(btn);
// });

// function updateCategoryButtons() {
//   document.querySelectorAll(".category-btn").forEach(btn => {
//     btn.classList.toggle("selected", btn.innerText === selectedCategory);
//   });
// }

// /* Products */
// function renderProducts() {
//   const query = searchInput.value.toLowerCase();
//   productsGrid.innerHTML = "";

//   products
//     .filter(p =>
//       (selectedCategory === "Toutes" || p.categorie === selectedCategory) &&
//       p.nom.toLowerCase().includes(query)
//     )
//     .forEach(p => {
//       const card = document.createElement("div");
//       card.className = "product-card";
//       card.innerHTML = `
//         <img src="${p.imageUrl}">
//         <p>${p.nom}</p>
//       `;
//       card.onclick = () => openProductModal(p);
//       productsGrid.appendChild(card);
//     });
// }

// /* Modal */
// function openProductModal(p) {
//   productModal.style.display = "block";
//   modalBody.innerHTML = `
//     <img src="${p.imageUrl}">
//     <h3>${p.nom}</h3>
//     <p>${p.description}</p>
//     <button onclick="orderWhatsapp('${p.nom}')">🛒 Commander via WhatsApp</button>
//   `;
// }

// function closeModal() {
//   productModal.style.display = "none";
// }

// function orderWhatsapp(productName) {
//   const numero = "241060088467";
//   const message = encodeURIComponent(
//     `Bonjour, je souhaite commander : ${productName}`
//   );
//   window.open(`https://wa.me/${numero}?text=${message}`, "_blank");
// }

// renderProducts();



// const categories = [
//   "Toutes",
//   "Crème",
//   "Lotion",
//   "Sirop",
//   "Complément",
//   "Hygiène",
//   "Médicament",
// ];

// const products = [
//   {
//     nom: "Crème Anti-démangeaison",
//     categorie: "Crème",
//     description: "Crème apaisante pour la peau.",
//     imageUrl: "assets/images/creme.jpg",
//   },
//   {
//     nom: "Sirop Toux",
//     categorie: "Sirop",
//     description: "Sirop contre la toux sèche.",
//     imageUrl: "assets/images/sirop.jpg",
//   },
//   {
//     nom: "Complément Vitamines",
//     categorie: "Complément",
//     description: "Pour renforcer votre immunité.",
//     imageUrl: "assets/images/vitamines.jpg",
//   },
//   {
//     nom: "Savon Hygiène",
//     categorie: "Hygiène",
//     description: "Savon antiseptique.",
//     imageUrl: "assets/images/savon.jpg",
//   },
//   {
//     nom: "Paracétamol",
//     categorie: "Médicament",
//     description: "Pour fièvre et douleurs.",
//     imageUrl: "assets/images/para.jpg",
//   },
// ];

// let selectedCategory = "Toutes";

// const productsGrid = document.getElementById("productsGrid");
// const categoryContainer = document.getElementById("categoryContainer");
// const searchInput = document.getElementById("searchInput");
// const productModal = document.getElementById("productModal");
// const modalBody = document.getElementById("modalBody");

// // Générer boutons catégories
// categories.forEach((cat) => {
//   const btn = document.createElement("button");
//   btn.innerText = cat;
//   btn.className = "category-btn";
//   if (cat === selectedCategory) btn.classList.add("selected");
//   btn.onclick = () => {
//     selectedCategory = cat;
//     updateCategoryButtons();
//     renderProducts();
//   };
//   categoryContainer.appendChild(btn);
// });

// function updateCategoryButtons() {
//   document.querySelectorAll(".category-btn").forEach((btn) => {
//     btn.classList.remove("selected");
//     if (btn.innerText === selectedCategory) btn.classList.add("selected");
//   });
// }

// // Filtrer et afficher produits
// function renderProducts() {
//   const query = searchInput.value.toLowerCase();
//   productsGrid.innerHTML = "";

//   const filtered = products.filter((p) => {
//     const matchSearch = p.nom.toLowerCase().includes(query);
//     const matchCategory =
//       selectedCategory === "Toutes" || p.categorie === selectedCategory;
//     return matchSearch && matchCategory;
//   });

//   filtered.forEach((p) => {
//     const card = document.createElement("div");
//     card.className = "product-card";
//     card.innerHTML = `<img src="${p.imageUrl}" alt="${p.nom}"><p>${p.nom}</p>`;
//     card.onclick = () => openProductModal(p);
//     productsGrid.appendChild(card);
//   });
// }

// function openProductModal(p) {
//   productModal.style.display = "block";
//   modalBody.innerHTML = `
//     <img src="${p.imageUrl}" alt="${p.nom}">
//     <h3>${p.nom}</h3>
//     <p>${p.description}</p>
//     <button onclick="orderWhatsapp('${p.nom}')">🛒 Commander via WhatsApp</button>
//   `;
// }

// function closeModal() {
//   productModal.style.display = "none";
// }

// function orderWhatsapp(productName) {
//   const numero = "+241060088467";
//   const message = encodeURIComponent(
//     `Bonjour, je suis intéressé par le produit '${productName}'.`
//   );
//   window.open(`https://wa.me/${numero}?text=${message}`, "_blank");
// }

// // Initial render
// renderProducts();
