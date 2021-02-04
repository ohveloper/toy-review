const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  arr.sort((a, b) => a - b);
  let N = arr.length;
  let a = arr[0] * arr[1] * arr[N - 1];
  let b = arr[N - 1] * arr[N - 2] * arr[N - 3];
  return Math.max(a, b);
};

// 맨 오른쪽은 무조건 가장 큰수
// 맨 왼쪽은 무조건 가장 작은수
// 맨왼쪽
// [-13, -11, 2, 3, 5, 7][(-13, -2, -3, -4, -7)];
// 1) sort를 한다
// 경우의수 , (4개일때)
// 마지막 세자리 곱했을때 음수일때 / -, -, - 작다/ -, +, + 작다
//           처음 세자리 곱하면 / -, -, - 크다/ -, -, + 크다
// 마지막 세자리 곱했을때 양수 / -, -, + 크다/ +, +, + 크다
//       처음 세자리 곱하면  /-, -, - 작다/ -, +, + 작다

// 경우의수 , (5개일때) [-5, -4, -3, -2, -1]
// 마지막 세자리 곱했을때 음수면 / - - - 작다/ - + + 작다/
//         처음 세자리 곱하면 / - - - 크다/ - - - 크다/
// 마지막 세자리 곱했을떄 양수 / - - + / + + + /
//          처음 세자리 곱 / - - - /