function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((prev, curr) => Number(prev) + Number(curr), 0);
}
