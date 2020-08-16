const body = document.querySelector("body");

const IMG_NUMBER = 6;

function genNumber() {
  return Math.floor(Math.random() * IMG_NUMBER) + 1;
}

function paintBackground(number) {
  const img = new Image();
  img.src = `${number}.jpg`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function init() {
  const randNumber = genNumber();
  paintBackground(randNumber);
}

init();
