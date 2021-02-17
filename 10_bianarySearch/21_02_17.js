const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      // mid 와 비교하면 안되고
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

// 비교를 arr[mid] 로 했어야 하는데 그냥 mid로 비교를 해버려서 스택오버플로우 걸림
