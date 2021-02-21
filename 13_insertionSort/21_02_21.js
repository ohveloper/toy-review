//TODO 기본적인 솔루션.
const insertionSort = function (arr) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= sorted[i - 1]) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (arr[i] <= sorted[j]) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};

//TODO: Advanced : 두밴째 인자로 callback 함수를 받아서, 그 함수의 값을 기준으로 요소들을 정리해보세요
const insertionSort = function (arr, transform = (item) => item) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};
// 봐도 모르겠다.... 벽느낀다...
