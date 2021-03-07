function solution(num) {
  if (num === 1) return 0;
  let answer = 0;
  while (answer !== 500) {
    if (num % 2 === 0) {
      num = num / 2;
    } else num = num * 3 + 1;
    answer++;
    if (num === 1) return answer;
  }

  return answer === 1 ? answer : -1;
}

console.log(solution(0));
