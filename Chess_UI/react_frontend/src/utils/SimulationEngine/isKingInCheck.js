import { getValidMoves } from "../moveLogic";

export const isKingInCheck = (board, color, kingPos) => {
    // 1. Find King's position
    // already have kingPos passed in (to save time), but let's verify it exists on the board

    if (!kingPos) return false;

    // 2. Check every opponent piece's moves
    const opponentColor = color === "white" ? "black" : "white";
    
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const piece = board[r][c];
            if (piece && piece.color === opponentColor) {
                // Get "pseudo-legal" moves (don't check for check recursively here!)
                const moves = getValidMoves(board, { row: r, col: c });
                
                if (moves.some(m => m.row === kingPos.row && m.col === kingPos.col)) {
                    return true; // King is under attack!
                }
            }
        }
    }
    return false;
};
