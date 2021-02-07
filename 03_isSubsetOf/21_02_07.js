const bubbleSort = function (arr) {
  const swap = function (idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  const N = arr.length;
  let swapped = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped++;
        swap(j, j + 1, arr);
      }
    }
    if (swapped === 0) {
      return arr;
    }
  }
  return arr;
};
