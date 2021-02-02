/*
# 문제

두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

# Advanced

시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.
 */

function isSubsetOf(base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const aux = function (from, currSample) {
    for (let i = from; i < base.length; i++) {
      if (currSample < base[i]) {
        return -1;
      }
      if (currSample === base[i]) {
        return i;
      }
    }
    return -1;
  };

  let idx = 0;
  for (let i = 0; i < sample.length; i++) {
    let currSample = sample[i];
    idx = aux(idx, currSample);
    if (idx === -1) {
      return false;
    }
  }
  return true;
}
