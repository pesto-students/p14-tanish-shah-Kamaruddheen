function isPalindrome(number) {
  // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
  if (number < 0) return "No";

  let reversed = "";
  temp = number;
  while (temp > 0) {
    reversed += temp % 10;
    temp = ~~(temp / 10);
  }

  return Number(reversed) === number;
}

console.log(isPalindrome(12321)); // Output: Yes
console.log(isPalindrome(12345)); // Output: No
console.log(isPalindrome(1221)); // Output: Yes
console.log(isPalindrome(0)); // Output: Yes
