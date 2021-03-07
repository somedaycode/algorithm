// 내 답안
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = ``;
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      answer += '*';
    }
    answer += '\n';
  }
  console.log(answer);
});

// 내가 생각하는 모범답안
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
