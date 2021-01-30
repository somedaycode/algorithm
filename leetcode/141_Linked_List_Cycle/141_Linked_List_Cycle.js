//Two Pointers
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let slowP = head;
  let fastP = head.next;
  while (slowP !== fastP) {
    if (fastP === null || fastP.next === null) {
      return false;
    }
    slowP = slowP.next;
    fastP = fastP.next.next;
  }
  return true;
};

// Hash Map
var hasCycle = function (head) {
  const seen = new Set();

  function traverse(node) {
    if (seen.has(node)) return true;
    if (!node) return false;
    seen.add(node);
    return traverse(node.next);
  }
  return traverse(head);
};
