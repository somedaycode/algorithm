// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let i = 0;
  let j = arr.length - 1;
  const suma = arr
    .map((num) => {
      return Math.abs(num[i++] - num[j--]);
    })
    .reduce((prev, curr) => prev - curr);

  console.log(suma);
  return Math.abs(suma);
}

/*
function diagonalDifference(arr) {
    let i = -1;
    let j = arr.length - 1;
    const suma = arr
      .map((num) => {
        i++;
        return num[i];
      })
      .reduce((prev, curr) => prev + curr);
  
    const sumb = arr
      .map((num) => {
        return num[j--];
      })
      .reduce((prev, curr) => prev + curr);
  
    console.log(sumb);
    return Math.abs(suma - sumb);
  }

  */
