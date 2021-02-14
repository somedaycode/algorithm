function solution(participant, completion) {
  for (let i = 0; i < participant.length; i += 1) {
    for (let j = 0; j < completion.length; j += 1) {
      if (completion[j] === participant[i]) {
        completion.splice(j, 1);
        participant.splice(i, 1);
        return solution(participant, completion);
      }
    }
  }
  const answer = participant.join('');
  console.log(answer);
  return answer;
}

// function solution(participant, completion) {
//   const map = new Map();

//   for (let i = 0; i < participant.length; i++) {
//     let a = participant[i];
//     let b = completion[i];

//     map.set(a, (map.get(a) || 0) + 1);
//     map.set(b, (map.get(b) || 0) - 1);
//   }

//   for (let [k, v] of map) {
//     if (v > 0) return k;
//   }
//   return 'nothing';
// }

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];
const participant2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion2 = ['josipa', 'filipa', 'marina', 'nikola'];

solution(participant, completion);
solution(participant2, completion2);
