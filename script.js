
let copy = document.querySelector("h2");

let btn1 = document.querySelector(".myButton");
let btn2 = document.querySelector(".myButton2");

let copyDiv = document.querySelector(".copyCode");

let rgb1 = "rgb(92,125,249)";
let rgb2 = "rgb(152,63,198)";

const hexValues = () => {
  let hexaValues = "0123456789abcdef";
  let colours = "#";
  for (let i = 0; i < 6; i++) {
    colours += hexaValues[Math.floor(Math.random() * 16)];
  }
  return colours;
};

const handleButton1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  btn1.innerText = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  btn2.innerHTML = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.innerText);
  alert("Color copied sucesfully.");
});

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);