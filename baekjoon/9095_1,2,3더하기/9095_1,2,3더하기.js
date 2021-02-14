const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const count = input[0];
  const dp = [0, 1, 2, 4];
  for (let j = 0; j < count; j += 1) {
    let i = 4;
    for (; i <= input[j + 1]; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    console.log(dp[input[j + 1]]);
  }
  process.exit();
});
