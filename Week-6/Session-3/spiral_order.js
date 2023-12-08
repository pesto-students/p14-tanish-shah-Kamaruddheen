/*

Input:
Rows: 3
Columns: 3
1 2 3 4 5 6 7 8 9

Output:
1 2 3 6 9 8 7 4 5

Explanation:
The elements are as follows:1 2 34 5 67 8 9

The output is the elements of the array printed in spiral order: 1 2 3 6 9 8 7 4 5.

The elements are traversed in the following order: 

top row from left to right, 
right column from top to bottom, 
bottom row from right to left, 
left column from bottom to top.

*/

function spiralOrderTraversal(matrix) {
  // PLACEHOLDER_JAVASCRIPT_SPIRAL_ORDER_TRAVERSAL_BODY
  let spiral = "";
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;

  while (left < right && top < bottom) {
    // top row from left to right
    for (let i = left; i < right; i++) {
      spiral += matrix[top][i] + " ";
    }
    top += 1;

    // right column from top to bottom
    for (let i = top; i < bottom; i++) {
      spiral += matrix[i][right - 1] + " ";
    }
    right -= 1;

    // edge case like only 1 row multiple col or 1 col multiple row
    if (!(left < right && top < bottom)) {
      break;
    }

    // bottom row from right to left
    for (let i = right - 1; i >= left; i--) {
      spiral += matrix[bottom - 1][i] + " ";
    }
    bottom -= 1;

    // left column from bottom to top
    for (let i = bottom - 1; i >= top; i--) {
      spiral += matrix[i][left] + " ";
    }
    left += 1;
  }

  return spiral.trim();
}

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(spiralOrderTraversal(matrix)); // 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

let test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrderTraversal(test1)); // 1 2 3 6 9 8 7 4 5

let test2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

console.log(spiralOrderTraversal(test2)); // 1 2 3 4 8 7 6 5

let test3 = [[1], [2], [3], [4]];

console.log(spiralOrderTraversal(test3)); // 1 2 3 4

let test4 = [[1, 2, 3, 4, 5]];

console.log(spiralOrderTraversal(test4)); // 1 2 3 4 5
