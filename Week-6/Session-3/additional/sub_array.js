function subarrays(arr) {
  // PLACEHOLDER_JAVASCRIPT_FIND_SUM_PAIRS_BODY

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        console.log(arr[k]);
      }
      console.log();
    }
  }
}

subarrays([1, 2, 3, 4]);
