
function simulateMove(board, from, to) {

    const newBoard = board.map(row => row.map(cell => cell ? { ...cell } : null));
    const piece = newBoard[from.row][from.col];
    newBoard[to.row][to.col] = piece;
    newBoard[from.row][from.col] = null;
    return newBoard;

}

export { simulateMove };