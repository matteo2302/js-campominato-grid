console.log("jsok");
//fase 0
const board = document.querySelector(".board");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  board.classList.remove("d-none");
});
