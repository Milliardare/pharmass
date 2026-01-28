const phoneNumber = "+241074224966";
const whatsappMessage =
  "Bonjour, j'aimerais avoir des informations concernant Pharmas.";

document.getElementById("whatsappBtn").addEventListener("click", () => {
  const url = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank");
});

document.getElementById("callBtn").addEventListener("click", () => {
  window.location.href = `tel:${phoneNumber}`;
});
// bouton retour
function retour() { if (window.history.length > 1) { window.history.back(); } else { window.location.href = "/pharmass/index.html"; } }

