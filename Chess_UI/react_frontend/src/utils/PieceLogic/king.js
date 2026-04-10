import { isInsideBoard } from "../isInsideBoard";
import { QueenLogic } from "./queen";

function KingLogic(board, position, moves) {
    const { row, col } = position;

    const potentialMoves = [
        { r: row - 1, c: col }, { r: row + 1, c: col }, // Vertical
        { r: row, c: col - 1 }, { r: row, c: col + 1 }, // Horizontal
        { r: row - 1, c: col - 1 }, { r: row - 1, c: col + 1 }, // Diagonals
        { r: row + 1, c: col - 1 }, { r: row + 1, c: col + 1 }
    ];

    for (let move of potentialMoves) {
        if (isInsideBoard(move.r, move.c)) {
            if (!board[move.r][move.c] || board[move.r][move.c].color !== board[row][col].color) {
                moves.push({ row: move.r, col: move.c });
            }
        }
    }

    
}

export { KingLogic };