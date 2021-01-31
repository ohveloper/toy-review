const rockPaperScissors = function (num) {
  // 재귀
  let count = num || 3;
  let rps = ["rock", "paper", "scissors"];

  const result = [];
  const recur = function (counter, arr) {
    if (counter === 0) {
      result.push(arr);
      return;
    }
    for (let i = 0; i < rps.length; i++) {
      // 반복문을 재귀바깥에 쓰다니.. 외워서 풀려니 실수하지 ㅉㅉ
      let item = rps[i];
      recur(counter - 1, arr.concat(item));
    }
  };
  recur(count, []); // 재귀를 어떻게 쓰는지 조차 헷갈린듯
  return result; // 리턴을 해줘야지.......왜안해...
};

// 이해했다고 생각했는데 하루만 지나도, 다시풀어보니까 가물가물 하다
// 완전 외워서 이해하고 씹어먹어야겠다..
// 구조자체를 외우고 이해해야지
