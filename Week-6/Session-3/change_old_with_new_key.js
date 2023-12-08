/*

Input:

1,2,3,2,4,2,5
2
6

Output:
[1, 6, 3, 6, 4, 6, 5]

Explanation:
There are total 3 2s presenting a array which is replaced by 6

*/

function replaceKey(arr, oldKey, newKey) {
  // PLACEHOLDER_JAVASCRIPT_REPLACE_KEY_BODY
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldKey) {
      arr[i] = newKey;
    }
  }

  return arr;
}

console.log(replaceKey([1, 2, 3, 2, 4, 2, 5], 2, 6)); // [1,6,3,6,4,6,5]
console.log(replaceKey([10, 20, 30, 40, 50], 30, 35)); // [10,20,35,40,50]
console.log(replaceKey([5, 5, 5, 5], 5, 2)); // [2,2,2,2]
console.log(replaceKey([1, 2, 3, 4, 5], 6, 8)); // [1,2,3,4,5]
