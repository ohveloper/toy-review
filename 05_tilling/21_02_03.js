let tiling = function (n) {
  // n이 주어지면 일단 재귀인지 의심해보자...
  const memo = [0, 1, 2];

  let recur = function (n) {
    if (memo[n] !== undefined) return memo[n];
    return (memo[n] = recur(n - 1) + recur(n - 2));
  };
  return recur(n);
};
