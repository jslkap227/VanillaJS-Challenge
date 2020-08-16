const timeContainer = document.querySelector(".js-timeContainer"),
  time = timeContainer.querySelector("h1");

function getTime() {
  const nowDate = new Date();
  const seconds = nowDate.getSeconds();
  const minutes = nowDate.getMinutes();
  const hours = nowDate.getHours();

  const secondStr = `${seconds < 10 ? `0${seconds}` : seconds}`;
  const minuteStr = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const hourStr = `${hours < 10 ? `0${hours}` : hours}`;

  time.innerText = `${hourStr} : ${minuteStr} : ${secondStr}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
