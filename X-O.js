const cells = document.querySelectorAll(".cell");
// const content = document.querySelector(".cell").textContent;
let player = "0";
let row, row2, row3;
let col, col2, col3;
let flag, content, winner;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
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
  cell.addEventListener("click", function (event) {
    row = Math.floor(index / 3);
    col = index % 3;
    console.log(row, col);
    content = event.target.textContent;
    // if (!(content == "X") && !(content == "O")) {
    if (player == `0`) {
      if (content == "") {
        // cell.classList.remove("o");
        cell.textContent = "X";
        board[row][col] = "X";
        //cell.classList.add("x");
        winner = CheckWinner(board, "X");
        console.log(CheckWinner(board, "X"));
        player = ChangeUser(player);
      }
    } else if (player === `1`) {
      if (content == "") {
        // cell.classList.remove("x");
        // cell.classList.add("o");
        cell.textContent = "O";
        board[row][col] = "O";
        winner = CheckWinner(board, "O");
        console.log(CheckWinner(board, "O"));
        player = ChangeUser(player);
      }
    }
    Winner(winner);
    // }
    // console.log(CheckWinner(row, col));
  });
});
