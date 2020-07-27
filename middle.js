



const middle = function(arr) {
  const divide = arr.length / 2;
  const solution = [];
  // console.log(divide)

  /// odd
  if (divide % 1 !== 0 && divide > 1) {
    solution.push(arr[Math.ceil(divide - 1)]);
  } else if (divide % 2 === 0 && divide > 1) {
    solution.push(arr[divide - 1], arr[divide]);

  } else if (divide % 3 === 0 && divide > 1) {
    solution.push(arr[divide - 1], arr[divide]);
  }

console.log(solution)
  return solution;
};

module.exports = middle;

