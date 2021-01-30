const rockPaperScissors = function (count) {
  let counter = count || 3;
  let rps = ["rock", "paper", "scissors"];

  let result = [];
  const recur = function (idx, base) {
    if (idx === 0) {
      result.push(base); // result.push.base; 로 작성해서 틀림
      return;
    }
    for (let i = 0; i < rps.length; i++) {
      recur(idx - 1, base.concat(rps[i])); // 전달인자 idx-1을 counter-1로해서 틀렸음
    }
  };
  recur(counter, []);
  return result;
};

// 문법오류 : 8번째줄
// 실수 : 12번째줄
// 한번더 생각하고 풀자
