function solution(nums) {
  const diffPonketmons = [...new Set(nums)];
  const max = nums.length / 2;
  if (max < diffPonketmons.length) return max;
  return diffPonketmons.length;
}
