function fibonacci(n) {
  // 외워서 풀기
  // 이미 풀린건 메모에 담아놓고 리턴하기
  let memo = [0, 1];

  const recur = function (n) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = recur(n - 1) + recur(n - 2);
    // 민철님 가르침, 아 어떻게 되는진 모르겠고, 암튼 n번째 피보나치는 n-1 + n-2 니깐
    // 아 모르겠고 재귀로들어가서 알아서 찾아와, 아 모르겠고 이거랑 이거랑 더하면 이거잖아
    // 알아서 찾아와...
    return memo[n];
  };
  return recur(n);
}

// 피보나치가 정말 정말 정말 어려웠었는데
// 그냥 외워서 푸는걸로 마음을 먹고 계속 다시 푸니까 눈에 점점 익는다
