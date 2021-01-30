// https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
  const sum = (m += s - 1);
  return sum % n ? sum % n : n;
}

saveThePrisoner(3, 7, 1);
saveThePrisoner(5, 2, 1);
