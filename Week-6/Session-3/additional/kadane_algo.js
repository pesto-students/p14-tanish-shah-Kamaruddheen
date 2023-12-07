function printMaxSubArraySum(arr) {
  let max_sum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    max_sum = Math.max(sum, max_sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max_sum;
}

console.log(printMaxSubArraySum([1, 2, 3, 4]));
console.log(printMaxSubArraySum([-5, -2, -3, -4, -1]));
console.log(printMaxSubArraySum([-5, -2, 1, 2, 3, 4, -10, 20]));
