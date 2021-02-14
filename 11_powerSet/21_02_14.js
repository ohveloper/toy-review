const powerSet = function (str) {
  const sorted = str.split("").sort();

  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });
  let subSets = [];
  const pickOrNot = (idx, subset) => {
    if (idx === deduplicated.length) {
      subSets.push(subset);
      return;
    }
  };
  pickOrNot(0, "");
  return subSets.sort();
};

console.log(powerSet("aabdsdadfssksdf"));
