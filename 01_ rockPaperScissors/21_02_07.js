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
      let curr = rps[i];
      recur(counter - 1, arr.concat(curr));
    }
  };
  recur(count, []);
  return result;
};
