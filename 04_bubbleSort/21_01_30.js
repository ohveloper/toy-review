const bubbleSort = function (arr) {
  // let arr = [3,5,2,4,2]
  // let temp = [arr[1], arr[2]] = [arr[2], arr[1]]
  // 1) 첨부터 끝가지 다 검사
  // let n = arr.length;

  // for (let i = 0; i < n-1; i ++) {
  //   for (let j = 0; j < n - 1 - i; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       swap(j, j+1, arr)
  //     }
  //   }
  // }
  // return arr;
  // 2) 검사속도 증가
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      let swaped = 0; // swap 횟수를 카운트한다
      if (arr[j] > arr[j + 1]) {
        swaped++;
        swap(j, j + 1, arr);
      }
    }
    // j를 돌고 나왔을때 한번도 swap을 하지 않았다면 이미 정렬이 완료된 상태이기 때문에
    // i를 ++ 해서 다시 돌아볼 필요가 없다
    // 100~1000 개 이내의 배열을 검사할땐 이게 없어도 돌릴만 하지만
    // 100,000 개를 돌린다고 가정할땐 필수적으로 컷트해줄 필요가 있다
    if (swaped === 0) {
      return arr;
    }
  }
  return arr;
};

const swap = function (idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
