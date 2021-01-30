var isPalindrome = function (x) {
  const rnum = x.toString().split('').reverse().join('');
  console.log(rnum);
  if (x !== Number(rnum)) {
    return false;
  }
  return true;
};

console.log(isPalindrome(121));
