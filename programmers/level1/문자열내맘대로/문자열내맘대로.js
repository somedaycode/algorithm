function solution(strings, n) {
  const sorting = [];
  for (let i = 0; i < strings.length; i += 1) {
    sorting.push(strings[i].slice(n, n + 1));
  }

  //   console.log(sorting.sort());
}

solution(['sun', 'bed', 'car'], 1);

console.log(
  ['sun', 'bed', 'car'].sort((a, b) => {
    console.log('a는', a);
    console.log('b는', b);
    console.log('a > b', a > b);
    console.log('----');
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
  })
);
