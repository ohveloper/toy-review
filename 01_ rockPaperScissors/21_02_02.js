const rockPaperScissors = function (count) {
  count = count || 3;
  const rps = ["rock", "paper", "scissors"];

  const result = [];

  let recur = function (counter, arr) {
    if (counter === 0) {
      result.push(arr);
      return;
    }

    for (let i = 0; i < rps.length; i++) {
      let currItem = rps[i];
      recur(counter - 1, arr.concat(currItem)); // 변수명에 주의하자
    }
  };
  recur(count, []);
  return result;
};
// 15번째 줄에서 counter-1 을 count -1로 입력해서 넘침
