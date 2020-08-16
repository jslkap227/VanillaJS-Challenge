const USER_LS = "currentUser";

const nameForm = document.querySelector(".js-nameForm"),
  nameInput = nameForm.querySelector("input");
const greeting = document.querySelector(".js-greeting");

function paintGreeting() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
  } else {
    nameForm.classList.add("hide");
    greeting.classList.remove("hide");
    greeting.classList.add("show");
    greeting.innerText = `Hello ${currentUser}!`;
  }
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleNameSubmit(event) {
  event.preventDefault();
  const name = nameInput.value;
  saveName(name);
  paintGreeting();
}

function init() {
  nameForm.addEventListener("submit", handleNameSubmit);
  paintGreeting();
}

init();
