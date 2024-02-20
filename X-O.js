const cells = document.querySelectorAll(".cell");
let player = "0";

function ChangeUser(player) {
  if (player === `0`) {
    player = `1`;
  } else if (player === `1`) {
    player = `0`;
  }
  return player;
}

function CheckWinner(row, col) {}

// function CheckCell(cell) {
//   if (cell.classList.contains("x")) {
//   }
// }
let row;
let col;

Array.from(cells).forEach((cell, index) => {
  console.log(cell, cells);
  cell.addEventListener("click", function () {
    row = Math.floor(index / 3);
    col = index % 3;
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      if (player === `0`) {
        cell.classList.remove("o");
        cell.classList.add("x");
        player = ChangeUser(player);
      } else if (player === `1`) {
        cell.classList.remove("x");
        cell.classList.add("o");
        player = ChangeUser(player);
      }
    }
    console.log(row, col);
    CheckWinner(row, col);
    console.log(CheckWinner(row, col));
  });
});
