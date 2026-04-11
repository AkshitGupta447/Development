/**
 * Generates all legal moves for a given color.
 * Returns an array of move objects containing 'from' and 'to' coordinates.
 */

import { getLegalMoves } from "../../utils/SimulationEngine/getLegalMoves";

export function getAllMoves(board, color) {
    const allMoves = [];

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const piece = board[r][c];

            // Only process squares that contain a piece of the current player's color
            if (piece && piece.color === color) {
                const from = { row: r, col: c };
                const moves = getLegalMoves(board, from);

                for (const move of moves) {
                    allMoves.push({
                        from: from,
                        to: move,
                        // Metadata for move ordering (helps Alpha-Beta pruning)
                        pieceType: piece.type,
                        capturedPiece: board[move.row][move.col] ? board[move.row][move.col].type : null
                    });
                }
            }
        }
    }

    return allMoves;
}
