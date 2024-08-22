const heading = document.getElementById("heading-prev");
const leftAlignButton = document.getElementById("leftAlign");
const centerAlignButton = document.getElementById("centerAlign");
const rightAlignButton = document.getElementById("rightAlign");
const blueColorButton = document.getElementById("blueColor");
const blackColorButton = document.getElementById("blackColor");
const greenColorButton = document.getElementById("greenColor");

const updateAlignment = (alignment) => {
  heading.classList.remove("text-left", "text-center", "text-right");
  heading.classList.add(`text-${alignment}`);
};

const updateColor = (color) => {
  heading.classList.remove("text-blue-500", "text-black", "text-green-500");
  heading.classList.add(`text-${color}-500`);
};

leftAlignButton.addEventListener("click", () => updateAlignment("left"));
centerAlignButton.addEventListener("click", () => updateAlignment("center"));
rightAlignButton.addEventListener("click", () => updateAlignment("right"));

blueColorButton.addEventListener("click", () => updateColor("blue"));
blackColorButton.addEventListener("click", () => updateColor("black"));
greenColorButton.addEventListener("click", () => updateColor("green"));
