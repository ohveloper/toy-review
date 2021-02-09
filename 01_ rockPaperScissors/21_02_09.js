const rockPaperScissors = function (n) {
  n = n || 3;
  const rps = ["rock", "paper", "scissors"];

  let result = [];
  let recur = function (count, arr) {
    if (count === 0) {
      result.push(arr);
      return;
    }
    for (let i = 0; i < rps.length; i++) {
      recur(count - 1, arr.concat(rps[i]));
    }
  };
  recur(n, []);
  return result;
};
