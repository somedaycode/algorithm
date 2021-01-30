const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
function compareLength(a, b) {
  const longNumber = a.length > b.length ? a : b;
  const shotNumber = a.length < b.length ? a : b;
  return [longNumber, shotNumber];
}

rl.on('line', function (line) {
  input.push(line.split(' '));
  rl.close();
}).on('close', function () {
  const inputs = input.pop();
  const result = inputs.map((v) => v.split(''));
  const a = result[0].reverse();
  const b = result[1].reverse();
  const longNumber = compareLength(a, b)[0];
  const shortNumber = compareLength(a, b)[1];

  const tempAnswer = [];
  let carry = 0;
  let i = 0;

  //short length
  for (; i < shortNumber.length; i++) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else carry = 0;
    tempAnswer.push(sum);
  }

  // rest numbers + answer
  for (; i < longNumber.length; i++) {
    let sum = Number(longNumber[i]) + carry;
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else carry = 0;
    tempAnswer.push(sum);
  }

  if (carry) tempAnswer.push(1);

  const answer = tempAnswer.reverse().join('');
  console.log(answer);
  process.exit();
});
