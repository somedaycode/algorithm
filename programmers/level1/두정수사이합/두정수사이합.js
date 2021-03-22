function solution(a, b) {
  const [start, end] = [a, b].sort((a, b) => a - b);
  let answer = 0;
  for (let i = start; i <= end; i += 1) {
    answer += i;
  }
  return answer;
}

// 수학으로 푼 어떤 사람의 답

function adder(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
