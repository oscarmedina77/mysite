const btn = document.querySelector("button");

const body = document.querySelector("body");

const logo = document.getElementById("logo");

const portrait = document.querySelector("img");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function handleClick() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

logo.addEventListener("click", handleClick);

function handleMouseover() {
  document.body.style.transform = "rotate(180deg)";
}

btn.addEventListener("click", handleMouseover);

console.log(body);
