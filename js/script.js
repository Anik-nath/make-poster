const headingButton = document.getElementById("headingBtn");
const imageButton = document.getElementById("imageBtn");
const descriptionButton = document.getElementById("descriptionBtn");
const headingInput = document.getElementById("heading-input");
const headingPreview = document.getElementById("heading-prev");
const descriptionInput = document.getElementById("description-input");
const descriptionPreview = document.getElementById("description-prev");
const imageInput = document.getElementById("image-input");
const imagePreview = document.getElementById("image-prev");
const downloadBtn = document.getElementById("download-btn");
const previewElement = document.getElementById("final-poster");
const reset = document.getElementById("reset-btn");
const itemsHeading = document.getElementById("items-heading");

headingButton.addEventListener("click", function () {
  showSection("heading");
});
imageButton.addEventListener("click", function () {
  showSection("image");
});
descriptionButton.addEventListener("click", function () {
  showSection("description");
});

function showSection(id) {
  const section = document.getElementById(id);
  const button = document.getElementById(id + "Btn");

  section.classList.remove("hidden");
  button.classList.add("hidden");
  checkButtonsVisibility();
}

function hideSection(id) {
  const section = document.getElementById(id);
  const button = document.getElementById(id + "Btn");

  section.classList.add("hidden");
  button.classList.remove("hidden");
  checkButtonsVisibility();
}

function checkButtonsVisibility() {
  const allButtonsHidden = [
    headingButton,
    imageButton,
    descriptionButton,
  ].every((btn) => btn.classList.contains("hidden"));

  if (allButtonsHidden) {
    itemsHeading.classList.add("hidden");
  } else {
    itemsHeading.classList.remove("hidden");
  }
}

document.querySelectorAll(".close-section").forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    const sectionId = this.dataset.section;
    hideSection(sectionId);
  });
});

headingInput.addEventListener("input", function () {
  headingPreview.textContent = this.value;
});

descriptionInput.addEventListener("input", function () {
  descriptionPreview.textContent = this.value;
});

imageInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

downloadBtn.addEventListener("click", function () {
  html2canvas(previewElement).then(function (canvas) {
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});

function resetAll() {
  headingInput.value = "";
  headingPreview.textContent = "";
  descriptionInput.value = "";
  descriptionPreview.textContent = "";
  imageInput.value = "";
  imagePreview.src = "";

  hideSection("heading");
  hideSection("image");
  hideSection("description");

  headingButton.classList.remove("hidden");
  imageButton.classList.remove("hidden");
  descriptionButton.classList.remove("hidden");

  checkButtonsVisibility();
}

reset.addEventListener("click", resetAll);
