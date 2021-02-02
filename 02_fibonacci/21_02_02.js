/* 문제
아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... */

function fib(n) {
  const memo = [0, 1];

  const recur = function (n) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = recur(n - 1) + recur(n - 2);
    return memo[n];
  };
  return recur(n);
}
