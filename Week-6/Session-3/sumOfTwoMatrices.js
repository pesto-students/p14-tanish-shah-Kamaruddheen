function sumOfTwoMatrices(rows, cols, array1, array2) {
  if (
    array1.length !== array2.length ||
    array1[0].length !== array2[0].length
  ) {
    return "Arrays must have the same dimensions";
  }

  let sum = [];

  for (let i = 0; i < rows; i++) {
    sum.push([]);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      sum[i][j] = array1[i][j] + array2[i][j];
    }
  }

  return sum;
}

console.log(
  sumOfTwoMatrices(
    2,
    3,
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [7, 8, 9],
      [10, 11, 12],
    ]
  )
); // [[8,10,12],[14,16,18]]

console.log(
  sumOfTwoMatrices(
    2,
    2,
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
); // [[6,8],[10,12]]

console.log(
  sumOfTwoMatrices(
    3,
    2,
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    [
      [7, 8],
      [9, 10],
      [11, 12],
    ]
  )
); // [[8,10],[12,14],[16,18]]

console.log(
  sumOfTwoMatrices(
    3,
    2,
    [
      [3, 3, 1],
      [2, 3, 4],
      [5, 6, 7],
      [8, 9],
    ],
    [
      [2, 2, 10],
      [11, 12, 13],
    ]
  )
); // Arrays must have the same dimensions.
