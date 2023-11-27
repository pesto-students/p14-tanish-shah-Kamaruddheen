function findSumOfMaxAndMin(arr) {
  // PLACEHOLDER_JAVASCRIPT_FIND_SUM_OF_MAX_AND_MIN_BODY
  let arr_length = arr.length;
  for (let i = 0; i < arr_length; i++) {
    for (let j = 0; j < arr_length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tem;
      }
    }
  }

  return arr[0] + arr[arr_length - 1];
}

console.log(findSumOfMaxAndMin([4, 2, 9, 1, 7, 5])); // 10
console.log(findSumOfMaxAndMin([-10, 0, 100, -50, 20])); // 50
console.log(findSumOfMaxAndMin([3, 8, 2, 6, 4])); // 10
console.log(findSumOfMaxAndMin([1, 1, 1, 1, 1])); // 2
