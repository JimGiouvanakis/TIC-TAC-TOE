const cells = document.querySelectorAll(".cell");
let player = "0";
let row, row2, row3;
let col, col2, col3;
let flag, content, winner;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

Array.from(cells).forEach((cell, index) => {
  cell.addEventListener("click", function (event) {
    row = Math.floor(index / 3);
    col = index % 3;
    console.log(row, col);
    content = event.target.textContent;
    if (player == `0`) {
      if (content == "") {
        cell.textContent = "X";
        board[row][col] = "X";
        console.log(board);
        winner = CheckWinner(board, "X");
        Winner(winner);
        player = ChangeUser(player);
      }
    } else if (player === `1`) {
      if (content == "") {
        cell.textContent = "O";
        board[row][col] = "O";
        console.log(board);
        winner = CheckWinner(board, "O");
        Winner(winner);
        player = ChangeUser(player);
      }
    }
  });
});
