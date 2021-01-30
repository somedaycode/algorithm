function solution(answers) {
  const answer = [];
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const hater1 = answers.filter((answer, idx) => answer === a[idx % a.length]);
  const hater2 = answers.filter((answer, idx) => answer === b[idx % b.length]);
  const hater3 = answers.filter((answer, idx) => answer === c[idx % c.length]);

  const max = Math.max(hater1.length, hater2.length, hater3.length);

  if (hater1.length === max) answer.push(1);
  if (hater2.length === max) answer.push(2);
  if (hater3.length === max) answer.push(3);
  return answer;
}

// idx % a.length 같은 길이를 반복하고 싶을 떄 유용하다

solution([1, 2, 3, 4, 5, 6, 2]);
console.log('-----------------');
solution([1, 3, 2, 4, 2]);
