const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

let toDos = [];

function handleDelBtn(event) {
  const btn = event.target,
    li = btn.parentElement;
  toDoList.removeChild(li);

  toDos = toDos.filter(function (toDoObj) {
    return toDoObj.id !== parseInt(li.id);
  });
  saveToDos();
}

function loadToDos() {
  const loaded_toDos = JSON.parse(localStorage.getItem("toDos"));
  if (loaded_toDos !== null) {
    loaded_toDos.forEach(function (toDoObj) {
      paintToDoList(toDoObj.toDo);
    });
  }
}

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDoList(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  const id = toDos.length;
  deleteBtn.innerText = "❌";
  span.innerText = toDo;
  deleteBtn.addEventListener("click", handleDelBtn);
  li.appendChild(deleteBtn);
  li.appendChild(span);
  li.id = id;
  toDoList.appendChild(li);
  const toDoObj = {
    toDo: toDo,
    id: id,
  };
  toDos.push(toDoObj);
  saveToDos(toDoObj);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  paintToDoList(toDo);
  toDoInput.value = "";
}

function init() {
  toDoForm.addEventListener("submit", handleToDoSubmit);
  loadToDos();
}

init();
