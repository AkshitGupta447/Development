
function PawnLogic(board, position, moves) {
    const { row, col } = position;
    const piece = board[row][col];
    const color = piece.color;
    const directions = color === 'white' ? 1 : -1; // White moves down, black moves up

    const forwardRow = row + directions;


    if(row==1 && directions === 1 || row === 6 && directions === -1) {
        // Initial double move
        if (board[forwardRow] && !board[forwardRow][col] && board[forwardRow + directions] && !board[forwardRow + directions][col]) {
            moves.push({ row: forwardRow + directions, col });
        }
    }

    // Move forward
    if (board[forwardRow] && !board[forwardRow][col]) {
        moves.push({ row: forwardRow, col });
    }

    // Capture diagonally
    for (let dc of [-1, 1]) {
        const diagCol = col + dc;
        if (board[forwardRow] && board[forwardRow][diagCol] && board[forwardRow][diagCol].color !== board[row][col].color) {
            moves.push({ row: forwardRow, col: diagCol });
        }
    }
}

export { PawnLogic };