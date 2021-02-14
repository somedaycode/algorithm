const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = [];
  input.push(line);
  const dp = [0, 1, 3, 5];
  const n = input[0];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] * 2;
    dp[i] = dp[i] % 10007;
  }
  console.log(dp[n]);
}).on('close', function () {
  process.exit();
});
