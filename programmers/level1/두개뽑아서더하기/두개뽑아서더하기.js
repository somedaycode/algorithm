function solution(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = 1 + i; j < numbers.length; j += 1) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(result)].sort((a, b) => a - b);
  return answer;
}
