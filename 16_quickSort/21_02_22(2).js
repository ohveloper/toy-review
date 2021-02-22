const quickSort = function (arr, transform = (item) => item) {
  // 재귀
  // 탈출
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) < transform(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }
  const lSorted = quickSort(left, transform);
  const rSorted = quickSort(right, transform);

  return [...lSorted, pivot, ...rSorted];
};
