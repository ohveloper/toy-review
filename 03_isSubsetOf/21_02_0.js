const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  let aux = function (currSample, fromIdx) {
    for (let i = fromIdx; i < base.length; i++) {
      if (currSample < base[i]) {
        return -1;
      }
      if (currSample === base[i]) {
        return i;
      }
    }
    return -1;
  };
  let idx = 0;
  for (let i = 0; i < sample.length; i++) {
    let curr = sample[i];
    idx = aux(curr, idx);
    if (idx === -1) {
      return false;
    }
  }
  return true;
};
