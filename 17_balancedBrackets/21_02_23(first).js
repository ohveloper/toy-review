const balancedBrackets = function (str) {
  // 검사할 기준을 정한다
  const benchmark = ["(", ")"];
  // 먼저 열려야 하며 열린만큼 닫힌다. -중요-
  const box = [];
  let N = box.length - 1;
  let lCnt = 0;
  let rCnt = 0;
  const splited = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (!benchmark.includes(splited[i])) continue;
    if (splited[i] === "(" && box[N] !== ")") {
      box.concat("(");
      lCnt++;
    } else {
      if (box[N] === "(") {
        if (lCnt >= rCnt) return false;
        else {
          box.concat(")");
          rCnt++;
        }
      }
    }
  }
  return true;
  // 만약 ( 를 만나면 박스에 담는다.
  // 담는중에 ) 를 만나면 박스를 검사한후에 담는다
  // ( 가 없는 상태에 )를 만나면 false
  // ( 가 있지만 ) 의 수보다 적을땐 false
};

// 접근은 좋았으나 난잡했다
