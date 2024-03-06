function ChangeUser(player) {
  if (player == `0`) {
    player = `1`;
  } else if (player == `1`) {
    player = `0`;
  }
  return player;
}

function CheckWinner(board, symbol) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] == symbol &&
      board[i][1] == symbol &&
      board[i][2] == symbol
    ) {
      return board[i][0];
    }
    if (
      board[0][i] === symbol &&
      board[1][i] === symbol &&
      board[2][i] === symbol
    ) {
      return board[0][i];
    }

    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2]) {
      return board[0][0];
    }
    if (
      board[0][2] === symbol &&
      board[1][1] === symbol &&
      board[2][0] === symbol
    ) {
      return board[0][2];
    }
  }
}

function RestartGame(board) {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  player = 0;
  return board;
}

function Winner(winner) {
  if (winner == "X") {
    board = RestartGame(board);
    document.getElementById("Modal-Header").textContent =
      "The Winner is the Player 1!!";
    OpenModel();
  } else if (winner == "O") {
    board = RestartGame(board);
    document.getElementById("Modal-Header").textContent =
      "The Winner is the Player 2!!";
    OpenModel();
  }
}
