const imageInput = document.getElementById("image-input");
const maxSizeMB = 15;

function handleFiles(files) {
  const file = files[0];
  if (file) {
    if (file.size > maxSizeMB * 800 * 400) {
      alert("File size must be less than 15MB.");
      return;
    }
  }
}
imageInput.addEventListener("change", () => handleFiles(imageInput.files));
