function ChangeUser(player) {
  if (player == `0`) {
    player = `1`;
  } else if (player == `1`) {
    player = `0`;
  }
  return player;
}

function CheckWinner(row, col, player) {
  // Array.from(cells).forEach((cell, index) => {
  // row2 = Math.floor(index / 3);
  // col2 = index % 3;
  flag = 0;
  if (player == `0`) {
    if (row == `2`) {
      Array.from(cells).forEach((cell, index) => {
        row3 = Math.floor(index / 3);
        col3 = index % 3;
        if (row3 == `2` && col3 == `0`) {
          if (cell.textContent == "X") {
            flag = `1`;
          }
        }
        if (row3 == `2` && col3 == `1` && flag == `1`) {
          if (cell.textContent == "X") {
            flag = `2`;
          }
        }
        if (row3 == `2` && col3 == `2` && flag == `2`) {
          if (cell.textContent == "X") {
            flag = `3`;
          }
        }
      });
    }
    console.log(`flag`, flag);
    if (flag == `3`) {
      console.log(`winner`, player);
    }
    // if (row2 === row + 1 && col2 === col + 1) {
    //   if (cell.classList.contains(`o`)) {
    //     Array.from(cells).forEach((cell, index) => {
    //       if (row2 === row + 2 && col2 === col + 2) {
    //       }
    //     });
    //   } else if (cell.classList.contains("x")) {
    //   }
    // }
  }
  // });
}
