import { isInsideBoard } from "../isInsideBoard";

function KnightLogic(board, position, moves) {

    const { row, col } = position;
    const knightMoves = [
        { dr: -2, dc: -1 }, { dr: -2, dc: 1 },
        { dr: -1, dc: -2 }, { dr: -1, dc: 2 },
        { dr: 1, dc: -2 }, { dr: 1, dc: 2 },
        { dr: 2, dc: -1 }, { dr: 2, dc: 1 }
    ];

    for (let move of knightMoves) {
        const newRow = row + move.dr;
        const newCol = col + move.dc;

        if(isInsideBoard(newRow, newCol)) {

            if (!board[newRow][newCol] || board[newRow][newCol].color !== board[row][col].color) {
                moves.push({ row: newRow, col: newCol });
            }
        }
    }
}

export { KnightLogic };