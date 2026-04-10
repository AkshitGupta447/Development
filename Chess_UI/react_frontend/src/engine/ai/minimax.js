
import { evaluateBoard } from "./evaluateBoard";
import { getLegalMoves } from "../../utils/SimulationEngine/getLegalMoves";
import { simulateMove } from "../../utils/SimulationEngine/simulatemove";


export function minimax(board, depth, isMaximizing) {
    if (depth === 0) {
        return evaluateBoard(board);
    }

    const color = isMaximizing ? "black" : "white";

    let bestScore = isMaximizing ? -Infinity : Infinity;

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const piece = board[r][c];

            if (piece && piece.color === color) {
                const moves = getLegalMoves(board, { row: r, col: c });

                for (let move of moves) {
                    const newBoard = simulateMove(board, { row: r, col: c }, move);

                    const score = minimax(newBoard, depth - 1, !isMaximizing);

                    if (isMaximizing) {
                        bestScore = Math.max(bestScore, score);
                    } else {
                        bestScore = Math.min(bestScore, score);
                    }
                }
            }
        }
    }

    return bestScore;
}