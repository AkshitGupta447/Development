

import { minimax } from "./minimax";
import { getLegalMoves } from "../../utils/SimulationEngine/getLegalMoves";
import { simulateMove } from "../../utils/SimulationEngine/simulatemove";

export function getBestMove(board, depth = 5) {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const piece = board[r][c];

            if (piece && piece.color === "black") {
                const moves = getLegalMoves(board, { row: r, col: c });

                for (let move of moves) {
                    const newBoard = simulateMove(board, { row: r, col: c }, move);

                    const score = minimax(newBoard, depth - 1, false);

                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = {
                            from: { row: r, col: c },
                            to: move
                        };
                    }
                }
            }
        }
    }

    return bestMove;
}