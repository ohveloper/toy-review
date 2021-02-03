const rockPaperScissors = function (count) {
  count = count || 3;
  const rps = ["rock", "paper", "scissors"];

  const result = [];
  let recur = (counter, arr) => {
    if (counter === 0) {
      result.push(arr); // 탈출조건 신경쓰자
      return;
    }
    for (let i = 0; i < rps.length; i++) {
      let curr = rps[i];
      recur(counter - 1, arr.concat(curr));
    }
  };
  recur(count, []);
  return result;
};

// 탈출조건 미스
