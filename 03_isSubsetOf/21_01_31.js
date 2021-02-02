const isSubsetOf = function (base, sample) {
  // 만약에 base의 n번째에 sample의 i 번째를 만나면
  // 다음부턴 n 밑으로는 검색해볼 필요도 없으니깐 n+1 부터 검사해보면 된다
  // 그중에 i+1 < n+1 이면 무조건 부분집합이 아닌거니깐 false
  // 이게 다 통하려면 일단 두 배열을 sort 를 해야된다
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  let idx = 0; // 이숫자를 기준으로 base의 인덱스를 결정하고 찾지 못했거나 idx번째보다 작으면 -1로 바꾸고 전달
  const aux = function (item) {
    for (let i = idx; i < base.length; i++) {
      if (item < base[i]) {
        return -1;
      }
      if (item === base[i]) {
        return i;
      }
    }
    return -1;
  };
  for (let i = 0; i < sample.length; i++) {
    idx = aux(sample[i]);
    if (idx === -1) {
      return false;
    }
  }
  return true;
};

// 외워서 풀다보니까 뭔가 구조가 점점 명확해지는거 같다
// 그전에 봤을때는 이해가 되는거 같으면서 안되는거 같았는데
// 그냥 자연스러워지는거 같다
// 익숙해지는거 같다
