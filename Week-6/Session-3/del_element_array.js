/*
Input:
[1, 2, 3, 4, 5, 6, 7, 8, 9]

Output:
[1, 5, 7]

Explanation:
1 , 5 and 7 are not divisible by 2 and 3.

*/

function deleteDivisibleElements(arr) {
  // PLACEHOLDER_JAVASCRIPT_DELETE_DIVISIBLE_ELEMENTS_BODY
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] % 3 === 0) {
      arr[i] = "";
    }
  }

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === "") {
      arr.splice(i, 1);
    }
  }

  return arr;
}

console.log(deleteDivisibleElements([2, 4, 6, 8, 10])); // []
console.log(deleteDivisibleElements([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1,5,7]
console.log(deleteDivisibleElements([9, 12, 15, 18, 21])); // []
console.log(deleteDivisibleElements([1, 3, 5, 7, 9])); // [1,5,7]
