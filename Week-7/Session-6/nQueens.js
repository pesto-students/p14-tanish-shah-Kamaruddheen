function isSafe(row, col, queens) {
  // Check if placing a queen at the given position is safe
  for (let prevRow = 0; prevRow < row; prevRow++) {
    const prevCol = queens[prevRow];
    if (
      // queen in the same column or diagonally
      prevCol === col ||
      Math.abs(prevRow - row) === Math.abs(prevCol - col)
    ) {
      return false; // Queens colliding each other
    }
  }
  return true; // Position is safe
}

function solveNQueensRecursive(row, numQueens, boardSize, queens, result) {
  if (row === numQueens) {
    // All queens are placed successfully, add the solution to the result
    result.push([...queens]);
    return;
  }

  for (let col = 0; col < boardSize; col++) {
    //   Checks all 8-direction is not colliding with other queens
    if (isSafe(row, col, queens)) {
      queens[row] = col; // Place a queen at the current position
      solveNQueensRecursive(row + 1, numQueens, boardSize, queens, result);
    }
  }
}

function solveNQueens(boardSize) {
  const result = [];
  const queens = Array(boardSize).fill(0); // Queens position array
  solveNQueensRecursive(0, boardSize, boardSize, queens, result);
  //   console.log(queens);
  //   console.log(result);
  //   Changing Queens position into x and y th poistion of matrix
  const formattedResult = result.map((solution) =>
    solution.map((col, row) => `${row},${col}`).join(",")
  );
  return formattedResult;
}

console.log(solveNQueens(4)); // 0, 1, 1, 3, 2, 0, 3, 2, 0, 2, 1, 0, 2, 3, 3, 1
console.log(solveNQueens(3)); // Program did not output anything!
console.log(solveNQueens(2)); // Program did not output anything!
console.log(solveNQueens(1)); // 0, 0
