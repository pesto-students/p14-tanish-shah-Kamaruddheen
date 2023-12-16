/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
function hasSubarrayWithSumK(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(arr[i], arr[j]);
      sum += arr[j];
      //   console.log(sum);
      if (sum === k) return true;
    }
  }

  return false;
}

console.log(hasSubarrayWithSumK([1, 2, 3, 4, 5], 9)); // true
console.log(hasSubarrayWithSumK([5, 8, 1, 2, 6], 14)); // true
console.log(hasSubarrayWithSumK([3, 7, 2, 1, 4], 20)); // false
console.log(hasSubarrayWithSumK([2, 4, 6, 8, 10], 12)); // true
