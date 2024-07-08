function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let amount = 0;
const inputNumber = document.querySelector('#controls input');
inputNumber.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

const boxes = document.querySelector('#boxes');
const buttons = document.querySelectorAll('#controls button');

buttons[0].addEventListener("click", () => createBoxes(amount));
buttons[1].addEventListener("click", () => destroyBoxes());

function createBoxes(num) {
  if (num >= 1 && num <= 100) {
    boxes.innerHTML = "";
    let size = 30;
    let markup = "";
    for (let i = 1; i <= num; i += 1) {
      markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
      size += 10;
    }
    boxes.insertAdjacentHTML("afterbegin", markup);
    inputNumber.value = "";
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}