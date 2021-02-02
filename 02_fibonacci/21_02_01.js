function fibonacci(n) {
  // 재귀 재귀재귀...
  // 한번 검사한건 다시 검사 안할꺼야
  let memo = [0, 1];

  // 재귀
  let recur = function (n) {
    // 탈출
    if (memo[n] !== undefined) return memo[n];
    memo[n] = recur(n - 1) + recur(n - 2);
    return memo[n];
  };
  return recur(n);
}

// 외워서 풀지만 한번더 생각해보자 왜 이런건지
// 민철님 명언 : "아 난 모르겠고, 이거랑 이거랑 더하면 이거니까 알아서 구해와"
// 재귀는 좀 막가는 느낌으로 다뤄줘야 될거같아
// 함수도 마찬가지, 꼼꼼하게 짜지만 들어오는거나 콜백이나 함수같은건 아 모르겠고
// 쓰는사람이 필요할때마다 함수 만들어서 넣고 난 모르겠고 작동되게 연결만 해놓을래
