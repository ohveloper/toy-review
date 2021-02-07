function fibonacci(n) {
  let memo = [0, 1];

  let recur = function (n) {
    if (memo[n] !== undefined) return memo[n];
    return (memo[n] = recur(n - 1) + recur(n - 2));
  };
  return recur(n);
}
