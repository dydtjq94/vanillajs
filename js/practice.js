function sayHello(user, age) {
  console.log("Welcome", user, "you have", age);
}
sayHello("yonsub", 27);

const yongsub = {
  name: "yongsub Yoon",
  age: "27",
  gender: "male",
  isHandsome: true,
  favFood: "chicken",
};

console.log(yongsub);
console.log(yongsub.age);
console.log(yongsub.isHandsome);
console.log(yongsub.favFood);
console.log(console);
console.info(yongsub);

//String
const what = "Nicols";
console.log(what);

function sayHello(user, age) {
  console.log(`welcome ${user} you have ${age}`);
}
sayHello("yonsub", 27);

function sayHello(user, age) {
  return `welcome ${user} you have ${age}`;
}
const greeting = sayHello("yonsub", 27);

console.log(greeting);

// //js를 통해 어떤 이벤트가 일어나면 바뀌는 것이 가장 핵심이다
// //사이즈 변경하면 사이즈 변경됐다고 콘솔에 띄움
// function handleResize() {
//   console.log("You have been resized");
// }
// window.addEventListener("resize", handleResize);

// //클릭하면 blue로 바뀜 타이틀이!!
// function handleClick() {
//   title.style.color = "blue";
// }
// title.addEventListener("click", handleClick);

// const clock = document.getElementById("clock");

const title = document.querySelector(".js-title");

// clock.innerHTML = "<h1> 울랄랄 </h1>";

title.innerHTML = "clock";
title.innerText = "bandband";
title.id = "ttttt";
title.style.backgroundColor = `blue`;
title.style.fontSize = `50px`;

const fontColor = title.style.backgroundColor;

function handleClick() {
  const bgColor = title.style.backgroundColor;
  if (bgColor === `blue`) {
    title.style.backgroundColor = `red`;
  } else {
    title.style.backgroundColor = `blue`;
  }
  console.log(bgColor);
}

title.addEventListener("click", handleClick);

console.dir(title);

console.dir(addEventListener);

document.title = `다 바꿔!!!`;

function init() {
  title.style.color = fontColor;
}

init();

// 괄호가 없어야 함수를 바로 호출하지 않음 엄청 중요!
window.addEventListener("resize", handleResize);

function handleResize() {
  console.log("I have been resized");
}
