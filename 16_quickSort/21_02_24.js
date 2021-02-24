const quickSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  const lSorted = quickSort(left);
  const rSorted = quickSort(right);

  return [...lSorted, pivot, ...rSorted];
};

// 다시봐도 햇갈리는 문제
//
