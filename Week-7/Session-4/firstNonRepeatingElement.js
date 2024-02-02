/**
 * @param {string} str
 * @return {string}
 */
function firstNonRepeatingElement(str) {
  let hashObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!hashObj.hasOwnProperty(str[i])) {
      hashObj[str[i]] = 1;
    } else {
      hashObj[str[i]] = hashObj[str[i]] + 1;
    }
  }

  for (const key in hashObj) {
    if (Object.hasOwnProperty.call(hashObj, key)) {
      if (hashObj[key] === 1) return key;
    }
  }

  return "";
}

console.log(firstNonRepeatingElement("abbcadef")); // c
console.log(firstNonRepeatingElement("aabbccdd")); // empty string
console.log(firstNonRepeatingElement("abcdefg")); // a
console.log(firstNonRepeatingElement("aaaabbbbccccddd")); // empty string
