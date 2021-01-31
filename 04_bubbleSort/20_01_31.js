const bubbleSort = function (arr) {
  // Array 위치 바꾸는법
  // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  let N = arr.length;
  // 마지막은 이미 채워져있을테니까 -1까지만 한다
  let swaped = 0;
  const swap = function (idx1, idx2, arr) {
    // swap을 반복문 밑에쓰면 인식을 못한다
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < N - 1; i++) {
    // i번째는 처리했기때문에 뒤에는 그만큼 처리가 되어있다는 가정을 하고 짧게 줄여준다
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaped++;
        swap(j, j + 1, arr);
      }
    }
    if (swaped === 0) {
      return arr;
    }
  }
  return arr;
};

// 선언하는 위치를 잘 보고 하자
// 반복문에 마지막은 뺴준다던지 i를 한번더 뺴준 반복문이라던지
// 불필요한 부분을 최대한 덜어내려는 노력을 한번더 생각해보자
