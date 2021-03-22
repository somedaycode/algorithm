function solution(a, b) {
  const answer = a.map((x, i) => x * b[i]).reduce((prev, curr) => prev + curr);
  return answer;
}

function solution(a, b) {
  const answer = a.reduce((prev, a, i) => prev + a * b[i], 0);
  return answer;
}
