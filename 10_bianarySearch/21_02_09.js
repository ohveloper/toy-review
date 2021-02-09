const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midIdx = parseInt((left + right) / 2);
    if (arr[midIdx] === target) {
      return midIdx;
    }
    if (target > arr[midIdx]) {
      left = midIdx + 1;
    } else {
      right = midIdx - 1;
    }
  }
  return -1;
};
