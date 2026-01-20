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
