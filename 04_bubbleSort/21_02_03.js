const bubbleSort = function (arr) {
  const N = arr.length;
  const swap = function (idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let swapped = 0;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        swapped++;
      }
    }
    if (swapped === 0) {
      return arr;
    }
  }
  return arr;
};

// length 좀 잘쓰자.... 맨날 틀려...
