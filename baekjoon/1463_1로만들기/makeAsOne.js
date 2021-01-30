const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const dp = [0, 0, 1, 1];
rl.on('line', function (line) {
  input.push(line);
  const n = input[0];
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
    }
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    }
  }
  console.log(dp[n] - 1);
}).on('close', function () {
  process.exit();
});
