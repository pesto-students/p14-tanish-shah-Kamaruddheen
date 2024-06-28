/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPointsOnLine(points) {
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === points[i][1]) count++;
  }

  return count;
}

console.log(
  maxPointsOnLine([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
); // 3
console.log(
  maxPointsOnLine([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
); // 3
console.log(
  maxPointsOnLine([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
  ])
); // 4
console.log(
  maxPointsOnLine([
    [1, 1],
    [2, 2],
  ])
); // 2
