// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  const result = s
    .match(/([^A-Z]+)/g)
    .toString()
    .split(':');

  if (s.includes('PM')) {
    result[0] = Number(result[0]) + 12;
    result[0] === 24 ? (result[0] = 12) : result[0];
  } else {
    result[0] === '12' ? (result[0] = '00') : result[0];
  }
  console.log(result.join(':'));
  return result.join(':');
}

// ------test case-------
const a = '07:05:45PM';
const b = '12:05:45PM';
const c = '12:05:46AM';
const d = '07:05:46AM';

timeConversion(a);
console.log(`-----------답: 19:05:45 \n`);
timeConversion(b);
console.log(`-----------답: 12:05:45 \n`);
timeConversion(c);
console.log(`-----------답: 00:05:45 \n`);
timeConversion(d);
console.log(`-----------답: 07:05:45 \n`);
