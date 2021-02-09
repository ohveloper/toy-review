const binarySearch = function (arr, target) {
  // arr의 중간지점을 파악한다
  // target이 어레이보다 큰지 작은지 확인한다
  // 작으면 왼쪽 arr를 넣고 재귀
  // 크면 오른쪽 arr를 넣고 재귀
  // 중간지점의 index가 2보다 작으면 완료

  let midIdx = parseInt(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx + 1, arr.length);
  if (midIdx === target) {
    return arr[target];
  }
  if (midIdx < 3) {
    return arr[target];
  }
  if (midIdx > target) {
    binarySearch(left, target);
  } else if (midIdx < target) {
    binarySearch(right, target);
  }

  return -1;
};
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 2));
