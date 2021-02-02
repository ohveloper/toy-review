const rockPaperScissors = function (count) {
  count = count || 3; // 기본값 3으로 설정
  let rps = ["rock", "paper", "scissors"];

  // 재귀
  let result = []; // 경우의수 담을 그릇
  let recur = function (counter, arr) {
    // 탈출
    if (counter === 0) {
      result.push(arr);
      return;
    }
    // 경우의수 담기
    for (let i = 0; i < rps.length; i++) {
      // lenght 라고 써서 동작안됨....
      let item = rps[i];
      recur(counter - 1, arr.concat(item));
    }
  };
  //재귀 호출
  recur(count, []);
  return result;
};

// 정신 똑바로 차리자.. 14번째줄 length 를 잘못써서 틀리는게 말이되냐
// 자동완성을 쓰던가 꼼꼼히 쓰던가 하자
