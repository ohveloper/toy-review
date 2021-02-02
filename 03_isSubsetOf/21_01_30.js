const isSubsetOf = function (base, sample) {
  // 1) 비교하기 쉽게 두 배열전부 소트한다
  // 2) sample 에서 하나씩 꺼내서 base에 비교해본다
  // 2-2) sample 에서 꺼낼때 base 의 해당 순서번째보다 작으면 부분집합 x
  // 3) 일치하는 번호 발견시 해당 base의 인덱스를 확인한후 저장
  // 4) 다음번 sample 검사시에 저장해놓은 인덱스 다음부터 검사한다
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  let idx = 0;

  let aux = function (item) {
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
    idx = aux(sample[i]); // 이부분을 if문 아래에 작성해서 에러가 났다
    if (idx === -1) {
      return false;
    }
  }
  return true;
};

// 문제점 :
// 1) 함수를 호출해오는 부분의 위치를 잘생각해서 작성하자
// 2) 코드작성시에 순서를 잘생각해보고 필요한 부분들이 어디에 필요한지 생각을 잘하자..
