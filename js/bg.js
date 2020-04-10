const body = document.querySelector("body");
const IMG_NUMBER = 5;

//paintImage함수
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

//랜덤 숫자 생성기
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

//랜덤 숫자 --> randomNumber에 집어넣고 paintImage함수 실행
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
