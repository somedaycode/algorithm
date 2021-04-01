const maxProfit = function (prices) {
  let min = Infinity;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};
const arr = [2, 4, 1];
maxProfit(arr);
