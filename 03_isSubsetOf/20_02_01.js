const isSubsetOf = function (base, sample) {
  // 부분집합에서 걸러지는 부분
  // 1) sort되어있다는 가정하에, 검사도중 sample의 첫번째가 base의 첫번째보다 작으면 무조건 아웃
  // 2) base의 n번째까지 검사가 되었다면 n번째 이후부터 검사하면된다
  // 필요한것
  // 2번에서 검사한 n을 저장할수 있는 idx
  // 1번에서 탈출할수 있는 조건문

  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  let idx = 0;
  const aux = function (currItem, from) {
    for (let i = from; i < base.length; i++) {
      if (currItem < base[i]) {
        return -1;
      }
      if (currItem === base[i]) {
        return i;
      }
    }
    return -1;
  };
  for (let i = 0; i < sample.length; i++) {
    idx = aux(sample[i], idx);
    if (idx === -1) {
      return false;
    }
  }
  return true;
};

// 외워서 계속 푸는게 도움이 될까 싶은 기분이 든다...
