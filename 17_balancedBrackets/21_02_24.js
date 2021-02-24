const balancedBrackets = function (str) {
  const left = "(";
  const right = ")";
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === left) stack.push(str[i]);
    else if (str[i] === right) {
      const top = stack.pop();
      if (!top) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// length 때문에 맨날 틀리고...
