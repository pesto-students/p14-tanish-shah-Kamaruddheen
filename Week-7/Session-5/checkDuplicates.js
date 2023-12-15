/**
 * @param {number[]} array
 * @return {boolean}
 */
function checkDuplicates(array) {
  let hashObj = {};
  let tmp = false;
  array.forEach((element) => {
    if (hashObj.hasOwnProperty(element)) {
      tmp = true;
    } else {
      hashObj[element] = 1;
    }
  });

  return tmp;
}

console.log(checkDuplicates([1, 2, 3, 4, 5, 1])); // true
console.log(checkDuplicates([10, 20, 30, 40, 50])); // false
console.log(checkDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])); // true
console.log(checkDuplicates([0, 0, 0, 0, 0])); // true
