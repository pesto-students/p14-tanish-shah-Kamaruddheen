/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  let hashObj = {};

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          const quadruplet = [nums[i], nums[j], nums[left], nums[right]];
          const quadrupletStr = quadruplet.toString(); // can't compare arr so using string to compare in hashing object
          // console.log(quadrupletStr, quadruplet);

          // pairs doesn't exists
          if (!hashObj.hasOwnProperty(quadrupletStr)) {
            hashObj[quadrupletStr] = quadruplet; // add new pairs
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }

    // console.log(nums[i] + " ------------------");
  }

  return Object.values(hashObj);
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
console.log(fourSum([2, 2, 2, 2, 2], 8)); // [ [ 2, 2, 2, 2 ] ]
console.log(fourSum([1, 2, 3, 4, 5], 10)); // [ [ 1, 2, 3, 4 ] ]
console.log(fourSum([0, 0, 0, 0], 0)); // [ [ 0, 0, 0, 0 ] ]

console.log();
