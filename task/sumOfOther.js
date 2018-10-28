module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
  return arr.map(x => sum - x);
};
