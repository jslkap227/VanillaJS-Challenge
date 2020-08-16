const body = document.querySelector("body");

const IMG_NUMBER = 6;

function genNumber() {
  return Math.floor(Math.random() * IMG_NUMBER) + 1;
}

function paintBackground(number) {
  const img = new Image();
  img.src = `C:/Users/s_jslkap227/Desktop/study/nomad/JS-Chrome_challenge/images/${number}.jpg`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function init() {
  const randNumber = genNumber();
  paintBackground(randNumber);
}

init();
