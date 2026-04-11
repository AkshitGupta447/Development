
import { evaluateBoard } from "./evaluateBoard";
import { getLegalMoves } from "../../utils/SimulationEngine/getLegalMoves";
import { simulateMove } from "../../utils/SimulationEngine/simulatemove";
import { getAllMoves } from "./getAllMoves";

export function minimax(board, depth, alpha, beta, isMaximizing) {
    if (depth === 0) return evaluateBoard(board);

    let bestScore = isMaximizing ? -Infinity : Infinity;
    const color = isMaximizing ? "black" : "white";

    // Optimization: Generate all moves for the current side first
    const moves = getAllMoves(board, color); 

    for (const move of moves) {
        const newBoard = simulateMove(board, move.from, move.to);
        const score = minimax(newBoard, depth - 1, alpha, beta, !isMaximizing);

        if (isMaximizing) {
            bestScore = Math.max(bestScore, score);
            alpha = Math.max(alpha, score);
        } else {
            bestScore = Math.min(bestScore, score);
            beta = Math.min(beta, score);
        }

        if (beta <= alpha) break; // Prune the branch
    }
    return bestScore;
}
