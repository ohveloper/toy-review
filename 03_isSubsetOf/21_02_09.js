const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const aux = function (from, currSample) {
    for (let i = from; i < base.length; i++) {
      if (base[i] > currSample) {
        return -1;
      }
      if (base[i] === currSample) {
        return i;
      }
    }
    return -1;
  };
  let idx = 0;
  for (let i = 0; i < sample.length; i++) {
    idx = aux(idx, sample[i]);
    if (idx === -1) {
      return false;
    }
  }
  return true;
};
