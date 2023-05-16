const originalImage = document.getElementById("original-image");
const resizedImage = document.getElementById("resized-image");
const fileInput = document.getElementById("file-input");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");

function showOriginalImage() {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    originalImage.src = e.target.result;
    originalImage.style.display = "block";
  };
  reader.readAsDataURL(file);
}

function resizeImage() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const width = parseFloat(widthInput.value) * 5;
  const height = parseFloat(heightInput.value) * 5;

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(originalImage, 0, 0, width, height);

  resizedImage.src = canvas.toDataURL();
  resizedImage.style.display = "block";
}

function downloadImage() {
  const link = document.createElement("a");
  link.download = "anh_da_doi_kich_thuoc.png";
  link.href = resizedImage.src;
  link.click();
}
