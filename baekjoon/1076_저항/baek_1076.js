const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const color = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
const input = [];
rl.on('line', function (line) {
  input.push(line);
  if (input.length === 3) rl.close();
}).on('close', function () {
  const num = 10;
  const result = input.map((v) => {
    for (let i = 0; i < color.length; i++) {
      if (v === color[i]) return color.indexOf(color[i]);
    }
  });

  function answer(result) {
    result[0] = result[0] * num;
    result[2] = result[2] === 0 ? 1 : 10 ** result[2];
    return (result[0] + result[1]) * result[2];
  }

  console.log(answer(result));

  process.exit();
});
