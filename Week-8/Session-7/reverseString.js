/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
  if (str == "") return "";
  else return reverseString(str.slice(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("programming")); // gnimmargorp
console.log(reverseString("racecar")); // racecar
console.log(reverseString("12345")); // 54321
