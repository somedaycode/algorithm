// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  if (x2 > x1 && v2 >= v1) {
    return 'NO';
  }
  while (x1 !== x2) {
    if (x1 > x2) {
      return 'NO';
    }
    x1 += v1;
    x2 += v2;
  }
  return 'YES';
}

kangaroo(0, 3, 4, 2);
