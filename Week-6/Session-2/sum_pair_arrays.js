function findSumPairs(arr, targetSum) {
  // PLACEHOLDER_JAVASCRIPT_FIND_SUM_PAIRS_BODY
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        let temp = [arr[i], arr[j]];

        pairs.push(temp);
      }
    }
  }

  return pairs;
}

console.log(findSumPairs([2, 4, 6, 8, 10], 12)); // [[2,10],[4,8]]
console.log(findSumPairs([1, 2, 3, 4, 5], 7)); // [[2,5],[3,4]]
console.log(findSumPairs([1, 1, 1, 1, 1], 2)); // [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]
console.log(findSumPairs([3, 4, 5, 6, 7], 10)); // [[3,7],[4,6]]
