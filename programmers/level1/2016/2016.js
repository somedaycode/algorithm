function solution(a, b) {
  const day = new Date(`2016, ${a}, ${b}`).getDay();
  const days = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',');
  return days[day];
}

solution(5, 24);
