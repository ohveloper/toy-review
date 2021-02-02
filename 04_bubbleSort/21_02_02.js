const bubbleSort = function (arr) {
  const N = arr.length;
  let swap = function (idx1, idx2, array) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };
  let swapped = 0;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // -1 이라니.. 정신 차려라이..
        swap(j, j + 1, arr); // -1 해서 안되는거 말이되냐,..
        swapped++;
      }
    }
    if (swapped === 0) {
      return arr;
    }
  }
  return arr;
};

// 아는문제라고 막 달리다가 틀린다...
