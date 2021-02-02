const bubbleSort = function (arr) {
  let swap = function (idx1, idx2, array) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };
  // arr 위치 바꾸는법
  // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  let swaped = 0;
  let N = arr.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaped++;
        swap(j, j + 1, arr);
      }
    }
    if (swaped === 0) {
      // .... swaped 가 한번도 안되면 arr이는 정렬된거니까 할필요 없는데...
      return arr;
    }
  }
  return arr;
};

// 외워서 풀다보니 휙휙 넘어가는 경향이 있다
// 16번째줄에 (swaped) 를 조건으로 줘서 작동 안됨...
