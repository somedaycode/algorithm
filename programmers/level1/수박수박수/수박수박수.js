function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i += 1) {
    if (i % 2 === 0) answer.push('박');
    else answer.push('수');
  }
  return answer.join('');
}
