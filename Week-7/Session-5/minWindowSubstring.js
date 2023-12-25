/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function minWindowSubstring(str1, str2) {
  if (str1.length < str2.length) {
    return "";
  }

  const str1Map = new Map();
  const str2Map = new Map();

  for (let char of str2) {
    str2Map.set(char, (str2Map.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let count = str2.length;
  let minWindow = "";

  while (right < str1.length) {
    const char = str1[right];
    if (str2Map.has(char)) {
      str1Map.set(char, (str1Map.get(char) || 0) + 1);
      if (str1Map.get(char) <= str2Map.get(char)) {
        count--;
      }
    }

    while (count === 0) {
      const windowSize = right - left + 1;
      if (minWindow === "" || windowSize < minWindow.length) {
        minWindow = str1.substring(left, right + 1);
      }

      const leftChar = str1[left];
      if (str2Map.has(leftChar)) {
        str1Map.set(leftChar, str1Map.get(leftChar) - 1);
        if (str1Map.get(leftChar) < str2Map.get(leftChar)) {
          count++;
        }
      }

      left++;
    }

    right++;
  }

  return minWindow;
}

console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // BANC
console.log(minWindowSubstring("aaabbbcdd", "abc")); // abbbc
console.log(minWindowSubstring("aabbaabbaabb", "abba")); // aabb
console.log(minWindowSubstring("hello world", "orl")); // orl
