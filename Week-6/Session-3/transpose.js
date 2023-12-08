/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

function displayMatrix(matrix) {
  console.log("Matrix:");
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("\t"));
  }
}

function transposeMatrix(matrix) {
  // PLACEHOLDER_JAVASCRIPT_TRANSPOSE_MATRIX_BODY
  let transposed = [];
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < col; i++) {
    transposed.push([]);
  }

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  console.log("Transposed:");
  for (let i = 0; i < transposed.length; i++) {
    console.log(transposed[i].join("\t"));
  }

  return transposed;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

displayMatrix(matrix);
transposeMatrix(matrix);

let matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

displayMatrix(matrix1);
transposeMatrix(matrix1);

let matrix2 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

displayMatrix(matrix2);
transposeMatrix(matrix2);
