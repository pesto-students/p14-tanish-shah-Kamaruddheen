/**
 * @param {number[]} arr
 * @return {number}
 */
function findLongestSubarray(arr) {
  let count = 0;
  let sum = 0;
  let hashObj = {
    0: -1,
  };

  for (let i = 0; i < arr.length; i++) {
    count += arr[i] === 0 ? -1 : 1;

    // console.log(hashObj.hasOwnProperty(count), count, i);

    if (hashObj.hasOwnProperty(count)) {
      //   console.log("----------------", i, hashObj[count]);
      sum = Math.max(sum, i - hashObj[count]);
    } else {
      hashObj[count] = i;
    }
  }

  //   console.log(hashObj);

  return sum;
}

console.log(findLongestSubarray([0, 1, 0, 1, 1, 0, 0])); // 6
console.log(findLongestSubarray([1, 0, 1, 0, 1, 0, 1])); // 6
console.log(findLongestSubarray([0, 0, 0, 0, 0, 0])); // 0
console.log(findLongestSubarray([1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0])); // 8

/*

// * BruteForce 1
// TC: O(n^3) approach

function findLongestSubarray(arr) {

  let len = arr.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let obj = {
        0: 0,
        1: 0,
      };

      for (let k = i; k <= j; k++) {
        if (arr[k] == 0) {
          obj[0] += 1;
        } else if (arr[k] == 1) {
          obj[1] += 1;
        }
      }

      if (obj[0] === obj[1]) {
        let tmp = obj[0] + obj[1];
        sum = tmp > sum ? tmp : sum;
      }

      // console.log("--------ddd----------");
    }
    // console.log("------------------");
  }

  return sum;
}
 */

/* 

// * BruteForce 2
// TC: O(n^2) approach

function findLongestSubarray(arr) {

  let len = arr.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    let obj = {
      0: 0,
      1: 0,
    };

    for (let j = i; j < len; j++) {
      console.log(arr[j]);
      if (arr[j] == 0) {
        obj[0] += 1;
      } else if (arr[j] == 1) {
        obj[1] += 1;
      }
    }

    let tmp = 0;

    if (obj[0] === obj[1]) {
      tmp = obj[0] + obj[1];
    }

    sum = tmp > sum ? tmp : sum;

    console.log(obj[0], "------------------", obj[1]);
  }

  return sum;
}

*/
