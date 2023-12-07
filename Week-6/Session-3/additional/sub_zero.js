function isZeroSumSubArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum == 0) return true;
    }
  }
  return false;
}

console.log(isZeroSumSubArray([4, 2, -3, 1, 6]));

// O(n2)
