let tiling = function (n) {
  // 타일을 놓을수 있는 방법은
  // 2x4 타일을 놓는 방법은 2x3 방법 + 2x2 와같다.. 그말은 곧 재귀..
  // 0개일때 0,
  // 1개일때 1,
  // 2개일때 2,
  // 3개일때 3,
  // 4개일때 3개일때 + 2개일때 = 5,
  // 5개일때 4개일때 + 3개일때 = 8
  let memo = [0, 1, 2]; // 여기까진 수작업
  let recur = function (n) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = recur(n - 1) + recur(n - 2);
    return memo[n];
  };
  return recur(n);
};

// 재귀는... 그냥 냅다 갈기는수밖에 없구나...
