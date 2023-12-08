/* 

Input:
N: 8
0
1
0
2
1
0
1
3

Output:
5

Explanation:
The output should be the total amount of rainwater that can be trapped.

*/

function trapRainWater(heights) {
  // PLACEHOLDER_JAVASCRIPT_TRAP_RAIN_WATER_BODY

  let rainWater = 0;
  let len = heights.length;

  for (let i = 1; i < len; i++) {
    let sum = 0;
    let left = Math.max.apply(Math, heights.slice(0, i));
    let right = Math.max.apply(Math, heights.slice(i, len));
    // console.log(left, heights[i], right);

    sum = Math.min(left, right) - heights[i];

    if (sum > 0) rainWater += sum;
  }

  return rainWater;
}

let ques = [0, 1, 0, 2, 1, 0, 1, 3];
let test1 = [0, 1, 0, 2, 0];
let test2 = [3, 0, 0, 2, 0, 4];
let test3 = [4, 2, 0, 3];
let test4 = [0, 1, 0, 3, 0, 2, 0];

console.log("Trapped Water: " + trapRainWater(ques)); // 5
console.log("Trapped Water: " + trapRainWater(test1)); // 1
console.log("Trapped Water: " + trapRainWater(test2)); // 10
console.log("Trapped Water: " + trapRainWater(test3)); // 4
console.log("Trapped Water: " + trapRainWater(test4)); // 3
