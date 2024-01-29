/**
 * @param {number} x
 * @param {number} p
 * @return {number}
 */
function exponentiation(x, p) {
  if (p === 0) return 1;
  else if (p < 0) return 1 / exponentiation(x, -p);
  else return exponentiation(x, p - 1) * x;
}

console.log(exponentiation(2, 3)); // 8
console.log(exponentiation(5, 0)); // 1
console.log(exponentiation(10, -2)); // 0.01
console.log(exponentiation(-3, 4)); // 81
