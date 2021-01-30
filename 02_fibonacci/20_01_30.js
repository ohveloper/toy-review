function fibonacci(n) {
  let memo = [0, 1];

  const recur = function (n) {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    memo[n] = recur(n - 1) + recur(n - 2);
    return memo[n];
  };
  return recur(n);
}

// 잘 이해가 안되서 식을 외워버렸다.. 아예 외워지게하고 이해해야지
