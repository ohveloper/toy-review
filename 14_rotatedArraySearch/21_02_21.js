const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  for (let i = 0; i < rotated.length; i++) {
    if (rotated[i] === target) {
      return i;
    }
  }
  return -1;
};

// 가장 기본인 o(n) 시간복잡도
