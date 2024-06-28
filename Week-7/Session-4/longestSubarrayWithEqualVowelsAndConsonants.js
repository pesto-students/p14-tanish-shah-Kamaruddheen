/**
 * @param {string} chars
 * @return {number}
 */

function longestSubarrayWithEqualVowelsAndConsonants(chars) {
  let vowels = "aeiou";
  // let vowels = "aeiouAEIOU"; // both lower and upper case
  const hashObj = { 0: -1 };
  let currentSubarray = 0;
  let longestSubarray = 0;

  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i])) {
      currentSubarray++;
    } else {
      currentSubarray--;
    }

    // console.log(hashObj);

    if (hashObj.hasOwnProperty(currentSubarray)) {
      longestSubarray = Math.max(longestSubarray, i - hashObj[currentSubarray]);
    } else {
      hashObj[currentSubarray] = i;
    }

    // console.log(currentSubarray, i);
  }

  return longestSubarray;
}

console.log(longestSubarrayWithEqualVowelsAndConsonants("abcdeiouiop")); // 6
console.log(longestSubarrayWithEqualVowelsAndConsonants("aeiouAEIOU")); // 10
console.log(longestSubarrayWithEqualVowelsAndConsonants("xyz")); // 0
console.log(longestSubarrayWithEqualVowelsAndConsonants("abcxyz")); // 2
