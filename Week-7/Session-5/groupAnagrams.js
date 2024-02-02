/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  // Hash map to store grouped anagrams
  const hashObj = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (hashObj.hasOwnProperty(sortedStr)) {
      hashObj[sortedStr].push(str);
    } else {
      hashObj[sortedStr] = [str];
    }
  }

  return Object.values(hashObj);
}

console.log(groupAnagrams(["abc", "bca", "xyz", "cba"])); // [["abc","bca","cba"],["xyz"]]
console.log(groupAnagrams(["car", "race", "arc"])); // [["car","arc"],["race"]
console.log(groupAnagrams(["listen", "silent", "enlist", "paint", "taint"])); // [["listen","silent","enlist"],["paint"],["taint"]]
console.log(groupAnagrams(["hello"])); // [["hello"]]

/*

BF 1 -> On^3

function groupAnagrams(strs) {

  let hashObj = [];

  for (let i = 0; i < strs.length; i++) {
    let arr = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      let tmp = false;

      if (strs[i].length != strs[j].length) continue;

      for (let k = 0; k < strs[i].length; k++) {
        // console.log(strs[i], strs[i][k], strs[j]);

        if (strs[j].includes(strs[i][k])) {
          // console.log(strs[i][k], strs[j][k]);
          tmp = true;
        } else tmp = false;
      }

      if (tmp) {
        arr.push(strs[j]);
      }

      //   console.log(i, j + "-------" + tmp + "-------");
    }

    hashObj.push(arr);
  }

  return hashObj;
}

*/
