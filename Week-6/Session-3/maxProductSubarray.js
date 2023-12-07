function maxProductSubarray(nums) {
  // Implement the function maxProductSubarray
  let prodsum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let prod = 1;
      for (let k = i; k <= j; k++) {
        prod *= nums[k];
        // console.log(nums[k]);
      }
      if (prod > prodsum) {
        // console.log(prod, prodsum);
        prodsum = prod;
      }
    }
    // console.log();
  }

  return prodsum;
}

console.log(maxProductSubarray([2, 3, -2, 4, 5]));
console.log(maxProductSubarray([-1, -2, -3, -4]));
console.log(maxProductSubarray([3, 4, 2, 1, -2, 5]));
console.log(maxProductSubarray([3, -4, 2, 1, -2, 5]));
