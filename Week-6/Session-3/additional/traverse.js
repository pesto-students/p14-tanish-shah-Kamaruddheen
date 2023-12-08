arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function traverse(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Row : ", i);
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j][i]);
    }
  }
}

traverse(arr);

/*
Row :  0
1
4
7
Row :  1
2
5
8
Row :  2
3
6
9
*/
