function solution(board, moves) {
  const basket = [];
  let doll = 0;
  // move 개수 만큼 순회
  moves.forEach((move) => {
    // 배열 길이 만큼 순회
    for (let i = 0; i < board.length; i++) {
      // 각 열(column)을 확인 하면서 0이 아니라면 그 값을 바구니에 넣는다.
      if (board[i][move - 1] !== 0) {
        basket.push(board[i][move - 1]);
        // 바구니에 있는 값과 그 이전에 넣은 값이 같다면 삭제하고 인형개수를 2개 늘린다.
        if (basket[basket.length - 2] === board[i][move - 1]) {
          basket.splice(-2, 2);
          doll += 2;
        }
        // 인형을 뺴낸 자리는 0으로 바꾼다.
        board[i][move - 1] = 0;
        return;
      }
    }
  });
  return doll;
}
