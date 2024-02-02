/**
 * @param {string} s
 * @return {string}
 */
function longestPalindromicSubstring(str) {
  let sub = "";
  let subLen = 0;

  function findPalindrom(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > subLen) {
        sub = str.slice(left, right + 1);
        subLen = right - left + 1;
      }

      left--;
      right++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    findPalindrom(i, i); // For odd length palindromes
    findPalindrom(i, i + 1); // For even length palindromes
  }

  return sub;
}

console.log(longestPalindromicSubstring("babad")); // bab
console.log(longestPalindromicSubstring("cbbd")); // bb
console.log(longestPalindromicSubstring("a")); // a
console.log(longestPalindromicSubstring("ac")); // a
