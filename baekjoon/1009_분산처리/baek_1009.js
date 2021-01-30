const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let round = 0;
const arr = [];
rl.on('line', function (line) {
  if (!round) {
    round = +line;
  } else {
    arr.push(line.split(' '));
    if (arr.length === round) {
      rl.close();
    }
  }
}).on('close', function () {
  const newArr = arr.map((v) => {
    const a = v[0];
    const b = v[1];
    let result = 1;
    for (let i = 1; i <= b; i++) {
      result = (result * a) % 10;
    }
    return result;
  });

  for (let i = 0; i < round; i++) {
    newArr[i] === 0 ? console.log(10) : console.log(newArr[i]);
  }
  process.exit();
});
