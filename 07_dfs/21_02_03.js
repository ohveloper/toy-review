let dfs = function (node) {
  let value = [node.value];
  node.children.forEach((n) => {
    value = value.concat(dfs(n));
  });
  return value;
  //? 처음 푼 코드
  // 해당 노드에 칠드런이 있는지 검사한다
  // 있으면 해당 칠드런을 대상으로 재귀
  // 없으면 해당 벨류 새로운 배열에 푸쉬
  // 배열 리턴
  // let result = []
  // let recur = function(currNode) {
  //   result.push(currNode.value)
  //   if (currNode.children.length) {
  //     for (let i of currNode.children) {
  //       recur(i)
  //     }
  //   }

  // }
  // recur(node)
  // return result
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
