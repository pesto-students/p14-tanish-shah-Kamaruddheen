function findIntersection(arr1, arr2) {
  // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY

  let intersect = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      // console.log(arr[i], arr[j])
      if (arr2[i] == arr1[j]) {
        if (!intersect.includes(arr2[i])) intersect.push(arr2[i]);
        break;
      }
    }
  }

  return intersect;
}

console.log(findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // 3
console.log(findIntersection([1, 1, 2, 2, 3], [2, 2, 3, 3, 4])); // 6
