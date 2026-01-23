// Pré-remplir la pharmacie depuis l'URL
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const pharmacie = params.get("pharmacie");

  if (pharmacie) {
    const pharmacieInput = document.getElementById("pharmacie");
    pharmacieInput.value = pharmacie;
    pharmacieInput.readOnly = true; // empêche la modification
  }
});



const optionNomMed = document.getElementById("optionNomMed");
const medicamentDiv = document.getElementById("medicamentDiv");
const optionConseil = document.getElementById("optionConseil");
const symptomesDiv = document.getElementById("symptomesDiv");

optionNomMed.addEventListener("change", () => {
  medicamentDiv.style.display = optionNomMed.checked ? "block" : "none";
});

optionConseil.addEventListener("change", () => {
  symptomesDiv.style.display = optionConseil.checked ? "block" : "none";
});

document.getElementById("callBtn").addEventListener("click", () => {
  window.location.href = "tel:+241074224966";
});

document.getElementById("whatsappBtn").addEventListener("click", () => {
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const tel = document.getElementById("tel").value;
  const pharmacie = document.getElementById("pharmacie").value;
  const lieu = document.getElementById("lieu").value;

  const selectedOptions = [];
  if (optionNomMed.checked) selectedOptions.push("Nom du médicament");
  if (document.getElementById("optionOrdonnance").checked)
    selectedOptions.push("Ordonnance");
  if (optionConseil.checked) selectedOptions.push("Conseil");
  if (document.getElementById("optionRecupSelf").checked)
    selectedOptions.push("Récupération");

  const medicament = document.getElementById("medicament").value;
  const symptomes = document.getElementById("symptomes").value;

  const message = encodeURIComponent(
    `Nouvelle commande:\nNom: ${nom} ${prenom}\nTéléphone: ${tel}\nPharmacie: ${pharmacie}\nLieu livraison: ${lieu}\nOptions: ${selectedOptions.join(
      ", "
    )}\nMédicament: ${medicament}\nSymptômes: ${symptomes}`
  );

  window.open(`https://wa.me/+241074224966?text=${message}`, "_blank");
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Commande envoyée (simulation pour GitHub Pages)");
  document.getElementById("orderForm").reset();
  medicamentDiv.style.display = "none";
  symptomesDiv.style.display = "none";
});
