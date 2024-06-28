/**
 * @param {string} str
 * @return {string}
 */
function findFirstNonRepeatingCharacter(str) {
  let hashObj = {};
  for (let i = 0; i < str.length; i++) {
    if (hashObj.hasOwnProperty(str[i])) {
      hashObj[str[i]] += 1;
    } else {
      hashObj[str[i]] = 1;
    }
    // console.log(str[i]);
  }

  for (const key in hashObj) {
    if (Object.hasOwnProperty.call(hashObj, key)) {
      if (hashObj[key] === 1) {
        return key;
      }
    }
  }

  return "No non-repeating characters found";
}

console.log(findFirstNonRepeatingCharacter("abccba")); // No non-repeating characters found
console.log(findFirstNonRepeatingCharacter("abcdabcd")); // No non-repeating characters found
console.log(findFirstNonRepeatingCharacter("aabbccd")); // d
console.log(findFirstNonRepeatingCharacter("abcdefg")); // a
