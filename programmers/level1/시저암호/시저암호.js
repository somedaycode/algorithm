function solution(s, n) {
  let aschi = [];
  for (let i = 0; i < s.length; i++) {
    let num = n;
    if (s.charCodeAt(i) === 32) {
      aschi.push(s.charCodeAt(i));
    } else if (s.charCodeAt(i) + num >= 122) {
      num = s.charCodeAt(i) + num - 122;
      if (num === 0) aschi.push(122);
      else aschi.push(97 + num - 1);
    } else if (s.charCodeAt(i) + num >= 90 && s.charCodeAt(i) < 97) {
      num = s.charCodeAt(i) + num - 90;
      if (num === 0) aschi.push(90);
      else aschi.push(65 + num - 1);
    } else aschi.push(s.charCodeAt(i) + num);
  }
  const answer = aschi.reduce((prev, asc) => {
    return prev + String.fromCharCode(Number(asc));
  }, '');
  return answer;
}

// 내가 생각하는 모범답안
function solution(s, n) {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
