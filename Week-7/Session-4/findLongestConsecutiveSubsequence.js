/**
 * @param {number[]} arr
 * @return {number}
 */
function findLongestConsecutiveSubsequence(arr) {
  const sets = new Set(arr);
  let maxCount = 0;

  sets.forEach((element) => {
    if (!sets.has(element - 1)) {
      let length = 0;

      while (sets.has(element + length)) {
        length++;
      }

      maxCount = Math.max(maxCount, length);
    }
  });

  return maxCount;
}

console.log(findLongestConsecutiveSubsequence([100, 4, 200, 1, 3, 2])); // 4
console.log(findLongestConsecutiveSubsequence([1, 2, 3, 4, 5])); // 5
console.log(findLongestConsecutiveSubsequence([10, 5, 7, 3, 4, 8, 9])); // 4
console.log(findLongestConsecutiveSubsequence([2, 4, 6, 8, 10])); // 1
