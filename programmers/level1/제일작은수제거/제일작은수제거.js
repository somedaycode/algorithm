function solution(arr) {
  const min = Math.min(arr);
  const answer = arr.filter((v) => v !== min);
  if (answer.length === 0) return [-1];
  else return answer;
}
