var reverse = function (x) {
  let rev = 0;
  if (x === 0) return 0;
  while (x !== 0) {
    const popNum = parseInt(x % 10);
    x = parseInt(x / 10);
    rev = rev * 10 + popNum;
  }
  if (rev >= Math.pow(2, 31) - 1 || rev <= -Math.pow(2, 31)) return 0;
  return rev;
};
