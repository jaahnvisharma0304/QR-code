let QR = document.getElementById("QR");
let img = document.getElementById("QR-img");
let input = document.getElementById("input");

function generateQR() {
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
}