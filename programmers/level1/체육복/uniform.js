function solution(n, lost, reserve) {
  let students = n - lost.length;
  const realLost = [];
  lost.forEach((lose) => {
    if (reserve.includes(lose)) {
      const idx = reserve.indexOf(lose);
      reserve.splice(idx, 1);
      students += 1;
      return;
    } else {
      realLost.push(lose);
    }
  });

  for (let i = 0; i < realLost.length; i += 1) {
    for (let j = 0; j < reserve.length; j += 1) {
      if (realLost[i] === reserve[j] - 1 || realLost[i] === reserve[j] + 1) {
        reserve.splice(j, 1);
        students += 1;
        break;
      } else if (!reserve) return;
    }
  }
  return students;
}

solution(20, [1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 7, 9]);
