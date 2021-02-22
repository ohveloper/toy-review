const quickSort = function (arr, transform = (item) => item) {
  //callback 함수에 선언도 선언이다
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) < transform(pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const lSorted = quickSort(left, transform);
  const rSorted = quickSort(right, transform);

  return [...lSorted, pivot, ...rSorted]; // 아 난 모르겠고 알아서 왼쪽 오른쪽 정렬해서 합쳐
};

// 어느순간부터 알고리즘 놓쳤었는데 다시 해봐야지
// 하루라도 놓치면 따라잡기 힘들다.
