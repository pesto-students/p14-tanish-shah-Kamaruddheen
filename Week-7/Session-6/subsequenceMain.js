/**
 * Finds all possible subsequences of a given string using recursion.
 * @param {string} str - The input string for which we want to find all possible subsequences.
 * @param {number} index - The current index of the string being processed.
 * @returns {string[]} - An array containing all possible subsequences of the input string.
 */
function subsequenceRecursive(str, index) {
  // Base Condition
  if (index === str.length) {
    return [""];
  }

  // Recursion
  // console.log(index, str);
  let subsequences = subsequenceRecursive(str, index + 1);

  let char = str[index];
  let newSubsequences = [];

  for (let sub of subsequences) {
    // console.log("index of ", index, char, sub);
    newSubsequences.push(char + sub);
  }

  return subsequences.concat(newSubsequences);
}

function subsequenceMain(str) {
  return subsequenceRecursive(str, 0);
}

console.log(subsequenceMain("abc")); // ['','a','b','ab','c','ac','bc','abc']
console.log(subsequenceMain("xyz")); // ['','x','y','xy','z','xz','yz', 'xyz']
console.log(subsequenceMain("hello")); // ['','h','e','he','l','hl','el','hel','l','hl','el','hel','ll', 'hll', 'ell', 'hell','o','ho','eo','heo','lo','hlo','elo','helo','lo','hlo','elo','helo','llo','hllo','ello','hello']
console.log(subsequenceMain("123")); // ['','1','2','12','3','13','23','123']
