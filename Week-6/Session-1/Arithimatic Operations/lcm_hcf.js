function calculateHCF(a, b) {
  // PLACEHOLDER_JAVASCRIPT_CALCULATE_HCF_BODY
  while (b !== 0) {
    let temp = b;
    b = a % b;
    // console.log(a, b);
    a = temp;
    // console.log(a);
  }
  return a;
}

function calculateLCM(a, b) {
  // PLACEHOLDER_JAVASCRIPT_CALCULATE_LCM_BODY
  return (a * b) / calculateHCF(a, b);
}

let a = 6,
  b = 8;

console.log(calculateHCF(a, b)); // HCF: 2
console.log(calculateLCM(a, b)); // LCM: 24

a = 15;
b = 100;

console.log(calculateHCF(a, b)); // HCF: 2
console.log(calculateLCM(a, b)); // LCM: 300
