const form = document.querySelector(".js-form");
const input = form.querySelector(".js-input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "User";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  //submit해도 아무일도 안일어나게 막음 (기본동작을 막음)
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Welcome! ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //she is not
    askForName();
  } else {
    //she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
