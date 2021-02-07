const largestProductOfThree = function (arr) {
  let newArr = arr.slice().sort((a, b) => a - b);
  const N = newArr.length;
  let first = newArr[0] * newArr[1] * newArr[N - 1];
  let last = newArr[N - 1] * newArr[N - 2] * newArr[N - 3];
  return Math.max(first, last);
};
