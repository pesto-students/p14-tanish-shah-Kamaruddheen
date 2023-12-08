function reverse(number) {
  // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
  let reversed = "";
  while (number > 0) {
    reversed += number % 10;
    number = ~~(number / 10);
  }

  return Number(reversed);
}

console.log(reverse(12345)); // Output: 54321
console.log(reverse(987654321)); // Output: 123456789
console.log(reverse(100)); // Output: 1
console.log(reverse(0)); // Output: 0
