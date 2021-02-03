const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  let aux = function (from, curr) {
    for (let i = from; i < base.length; i++) {
      if (curr < base[i]) {
        return -1;
      }
      if (base[i] === curr) {
        return i;
      }
    }
    return -1;
  };
  let idx = 0;
  for (let i = 0; i < sample.length; i++) {
    let curr = sample[i];
    idx = aux(idx, curr);
    if (idx === -1) {
      return false;
    }
  }
  return true;
};
