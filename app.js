// Récupération des éléments
const inputText = document.getElementById('qr-text');
const inputDark = document.getElementById('qr-dark');
const inputLight = document.getElementById('qr-light');
const btnGenerate = document.getElementById('qr-generate');
const qrContainer = document.getElementById('qrcode');

// Instanciation de base du QR (avec valeurs par défaut)
let qr = new QRCode(qrContainer, {
  text: "",
  width: 256,
  height: 256,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

// Fonction pour mettre à jour le QR
function updateQRCode() {
  const text = inputText.value.trim();
  const dark = inputDark.value;
  const light = inputLight.value;

  if (!text) {
    alert("Entre un texte ou une URL.");
    return;
  }

  // On vide le conteneur pour éviter d’empiler des canvases
  qrContainer.innerHTML = "";

  // On recrée un QRCode avec les nouvelles options
  qr = new QRCode(qrContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: dark,
    colorLight: light,
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Click sur le bouton
btnGenerate.addEventListener('click', updateQRCode);

// (optionnel) Générer en direct quand on tape
inputText.addEventListener('keyup', (e) => {
  if (e.key === "Enter") {
    updateQRCode();
  }
});
