const cells = document.querySelectorAll(".cell");
const content = document.querySelector(".cell").textContent;
let player = "0";
let row, row2, row3;
let col, col2, col3;
let flag;

// function ChangeUser(player) {
//   if (player == `0`) {
//     player = `1`;
//   } else if (player == `1`) {
//     player = `0`;
//   }
//   return player;
// }

// function CheckCell(cell) {
//   if (cell.classList.contains("x")) {
//   }
// }

Array.from(cells).forEach((cell, index) => {
  // console.log(cell, cells);
  cell.addEventListener("click", function () {
    row = Math.floor(index / 3);
    col = index % 3;
    console.log(row, col);
    if (!(content == "X") && !(content == "O")) {
      if (player == `0`) {
        if (!(content == "O")) {
          // cell.classList.remove("o");
          cell.textContent = "X";
          //cell.classList.add("x");
          CheckWinner(row, col, player);
          player = ChangeUser(player);
        }
      } else if (player === `1`) {
        if (!(content == "X")) {
          // cell.classList.remove("x");
          // cell.classList.add("o");
          cell.textContent = "O";
          CheckWinner(row, col, player);
          player = ChangeUser(player);
        }
      }
    }
    // console.log(CheckWinner(row, col));
  });
});
