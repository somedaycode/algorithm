function solution(x) {
  let answer = true;
  const num = x.toString().split('');
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  if (x % sum !== 0) answer = false;
  return answer;
}

function solution(x) {
  const sum = x
    .toString()
    .split('')
    .reduce((prev, curr) => Number(prev) + Number(curr));
  return x % sum === 0 ? true : false;
}
