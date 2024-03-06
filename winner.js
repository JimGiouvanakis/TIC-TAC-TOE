function Winner(winner) {
  if (winner == "X") {
    alert("Player 1 is the winner!!");
    board = RestartGame(board);
  } else if (winner == "O") {
    alert("Player 2 is the winner!!");
    board = RestartGame(board);
  }
}
