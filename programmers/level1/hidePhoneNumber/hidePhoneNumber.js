function solution(phone_number) {
  const arr = phone_number.split('');
  const len = phone_number.length - 4;
  for (let i = 0; i < len; i++) {
    arr[i] = '*';
  }
  return arr.join('');
}

function solution(phone_number) {
  const answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}
