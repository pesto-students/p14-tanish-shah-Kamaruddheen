function findNonDuplicateElement(arr) {
  // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY

  for (let i = 0; i < arr.length; i++) {
    let unique = true;

    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[i], arr[j])
      if (i == j) continue;
      if (arr[i] == arr[j]) {
        unique = false;
        break;
      }
    }

    if (unique) return arr[i];
  }
}

console.log(findNonDuplicateElement([1, 1, 2, 2, 3, 4, 4])); // 3
console.log(findNonDuplicateElement([2, 4, 6, 2, 4])); // 6
console.log(findNonDuplicateElement([5])); // 5
