const largestProductOfThree = function (arr) {
  arr.sort((a, b) => a - b);
  let N = arr.length;
  const left = arr[0] * arr[1] * arr[N - 1];
  const right = arr[N - 1] * arr[N - 2] * arr[N - 3];
  return Math.max(left, right);
};
