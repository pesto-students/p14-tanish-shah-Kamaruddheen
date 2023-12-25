function indicesRecursive(arr, target, index) {
  // recursive through last element of array
  if (arr.length === index) {
    return [];
  }

  // checks if it matches the target
  if (arr[index] === target) {
    // console.log(arr[index], index);
    // adds index to array and look for the next element
    return [index].concat(indicesRecursive(arr, target, index + 1));
  } else {
    // look for the next element
    return indicesRecursive(arr, target, index + 1);
  }
}

function indicesMain(arr, target) {
  // starting array index with 0
  return indicesRecursive(arr, target, 0);
}

console.log(indicesMain([1, 2, 3, 2, 4, 2, 5], 2)); // [1, 3, 5]
console.log(indicesMain([3, 2, 5, 4, 2, 2, 1], 2)); // [1, 4, 5]
console.log(indicesMain([1, 1, 1, 1, 1], 1)); // [0, 1, 2, 3, 4]
console.log(indicesMain([4, 5, 6, 7, 8], 9)); // []
