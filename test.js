function solution(a, b) {
  const day = new Date(`2016, ${a}, ${b}`).getDay();
  const days = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',');
  console.log(day);
}

solution(5, 24);
