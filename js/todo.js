const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; //원래 const였는데 뒤에 바꿔야하니깐 let으로 바꿈

//todolist 삭제하는 것
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDolist.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  console.log(cleanToDos);
  toDos = cleanToDos;
  console.log(toDos.id);
  saveToDos();
}

//toDos를 가져와서 로컬에 저장하는 함수
//JSON.stringify를 이용하여 스트링으로 저장 (어떤 오브젝트든 스트링으로 바꿈)
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//리스트 추가하는 것
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("Button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.addEventListener("click", deleteToDo);
  delBtn.innerText = "X";
  delBtn.style.marginLeft = "10px";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDolist.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId, //한개씩 추가되는 id를 얻기 위해
  };

  toDos.push(toDoObj); //push를 이용해 array안에 하나씩 추가
  saveToDos();
  //object Object로 되어있는 이유 local storage에는 자바스크립트의 data를 저장 불가 오직 스트링
  //그래서 우리는 트릭으로 JSON.stringify를 이용
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    //어레이 안에 있는 값 각각 함수
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
