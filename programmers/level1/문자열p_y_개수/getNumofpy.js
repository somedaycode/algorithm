function solution(s) {
  const a = s.split('');
  var answer = true;
  let countP = 0;
  let countY = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 'p' || a[i] === 'P') {
      countP++;
    } else if (a[i] === 'y' || a[i] === 'Y') {
      countY++;
    }
  }
  if (countP === countY) {
    return answer;
  } else {
    answer = false;
    return answer;
  }
}
