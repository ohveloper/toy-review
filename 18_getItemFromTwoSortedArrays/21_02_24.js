const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let cnt = 0,
    left = 0,
    right = 0;
  let target;

  while (cnt < k) {
    // k - 1만큼 카운트 한다
    if (arr1[left] < arr2[right]) {
      // arr2, arr1 번갈아 동작
      target = arr1[left];
      left++; // 다음 while 문에서  arr2를 동작
    } else {
      // arr2, arr1 번갈아 동작
      target = arr2[right]; // 현재 위치를 저장
      right++; // ++ 를 해줘서 arr1 다음 while 문에서 arr1을 동작
    }
    cnt++;
  }
  return target;

  // arr2 부터 출발해서 arr2.lnegth 가 k 보다 커지면
  // arr1 로 비교하기 시작
  // const newArr = arr1.concat(arr2).sort((a, b) => a - b);

  // const left = 0;
  // const right = 0;

  // while (left < right) {

  // }
};
