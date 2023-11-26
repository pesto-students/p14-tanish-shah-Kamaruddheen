function calculateHCF(a, b) {
  // PLACEHOLDER_JAVASCRIPT_CALCULATE_HCF_BODY
  let hcf;

  for (let i = 1; i <= a && i <= b; i++) {
    // console.log("i th value : ", i)
    // console.log("Value 1 : ", a, "\n Value 2 : ", b)
    // console.log("hcf : ", hcf)
    // check if is factor of both integers
    if (a % i == 0 && b % i == 0) {
      hcf = i;
      // console.log("added hcf : ", hcf, "with ith value", i)
    }
    // console.log("-------------------------------------")
  }

  return hcf;
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
