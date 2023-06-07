console.log("jsok");
//fase 0
const board = document.querySelector(".board");
const button = document.querySelector("button");
const cell = document.querySelector(".cell");
let row = 10;
let cols = 10;
let totalCell = row * cols;
button.addEventListener("click", function () {
  board.classList.remove("d-none");
  for (i = 0; i < totalCell; i++) {
    board.innerHTML += `<div class="cell"></div>`;
    cell.innerText += $[i + 1];
  }
});
