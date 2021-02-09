let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let memo = [0, 1, 2];
  let recur = (n) => {
    if (memo[n] !== undefined) return memo[n];
    return (memo[n] = recur(n - 1) + recur(n - 2));
  };
  return recur(n);
};
