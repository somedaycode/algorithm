var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1);
      if (!prefix) return '';
    }
  }
  return prefix;
};
