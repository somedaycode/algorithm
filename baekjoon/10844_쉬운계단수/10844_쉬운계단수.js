const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ans = Array.from(Array(100), () => new Array(100).fill(null));
console.log(ans);
rl.on('line', function (line) {
  let n = Number(line);

  for (let i = 0; i < 10; i += 1) {
    ans = [1][i] = 1;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 10; j++) {
      if (j > 0) {
        ans[i][j] += ans[i - 1][j - 1];
      }
      if (j < 9) {
        ans[i][j] += ans[i - 1][j + 1];
      }
      ans[i][j] %= 1000000000;
    }
  }

  let sum = 0;
  for (let i = 0; i <= 9; i += 1) {
    sum = (sum + ans[n][i]) % 1000000000;
  }
  console.log(sum);
  rl.close();
}).on('close', function () {
  process.exit();
});
