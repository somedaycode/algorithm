function solution(arr1, arr2) {
  const answer = [];
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
    temp = [];
  }
  return answer;
}

// 모범답안
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, i2) => (b += arr2[i][i2])));
}
