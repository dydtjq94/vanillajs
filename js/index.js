// alert("Im Working. Im JS.");
// console.log("Im Working. Im JS.");

// const a = 221;
// let b = a - 5;
// a = b + 3;
// console.log(b, a);

//string
// const what = "Nicolas";

//boolean
// const what = true;

//Nymber
// const what = 666;

//floate
// const what = 55.1;

//데이터 정렬 (array)
// const someting = 2777;
// const daysOfWeek = [
//   "Mon",
//   "Tue",
//   "Wed",
//   "Tue",
//   "Fri",
//   "Sat",
//   "Sun",
//   true,
//   someting,
// ];
// daysOfWeek[2] = "not Tue";
// console.log(daysOfWeek);

//데이터 정렬 (object)
// const userOfInfo = {
//   name: "Nico",
//   age: 33,
//   gender: "Male",
//   isHandsome: true,
//   favMovies: ["Along the gods", true],
//   favFood: [
//     { name: "Kimchi", fatty: false },
//     { name: "Cheese burger", fatty: true },
//   ],
// };

// userOfInfo.gender = "Female";

// console.log(userOfInfo.favFood[1].name);
// console.log(userOfInfo.gender);

//함수 정의
// function sayHello(potato, age) {
//   console.log("Hello!", potato, "you have", age, "years of age.");
// }
// sayHello("yongsub", 15);

// function sayHello(name, age) {
//   return `Hello ${name} you are ${age} years old`;
// }
// greet는 sayHello의 리턴값
// const greet = sayHello("yongsub", 15);

// console.log(greet);

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
//   divided: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// const plus = calculator.plus(5, 5);
// const minus = calculator.minus(5, 5);
// const multiply = calculator.multiply(5, 5);
// const divided = calculator.divided(5, 5);
// const power = calculator.power(5, 2);
// console.log(plus, minus, multiply, divided, power);

// const result = [calculator.plus(5, 5), calculator.minus(5, 5)];
// console.log(result[0]);

// console.log(calculator.plus(5, 5));

// console.log(`5 + 5 = ${plus}`);

// html이랑 연결
const title = document.getElementById("title");
const title = document.querySelector("#title");

// title.innerHTML = "heeellllllo";
// console.log(title);
// title.style.color = "red";
// console.dir(title); //title의 세부 정보

// document.title = "babo";

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

//if 문
// if ("10" === 10) {
//   console.log("hi");
// } else {
//   console.log("no");
// }

// if 연습
// const age = prompt("How old are you?");
// if (age > 18) {
//   console.log("you can drink");
// } else {
//   console.log("you cant");
// }

// //DOM if 연습
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("mouseenter", handleClick);
// }

// init();

// //추가 연습 (오프라인상태면?)
// function handleOffline() {
//   console.log("OFFLINE!!!!!!!!!!");
// }

// function handleOnline() {
//   console.log("ONLINE!!!!!!!!!!");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

//DOM if 연습2 (class를 건듬)
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   //contains --> 이 클래스가 지금 있는지 없는지 확인
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   if (!hasClass) {
//     title.classList.add(CLICKED_CLASS);
//   } else {
//     title.classList.remove(CLICKED_CLASS);
//   }
// }

//--> 이 모든 과정이 그냥 toggle이란 것으로 한번에 끝낼 수 있음
function handlEClick() {
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handlEClick);
}
init();
