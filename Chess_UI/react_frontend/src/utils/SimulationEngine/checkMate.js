// Checkmate when king is in check and has no valid moves
import { getLegalMoves } from "./getLegalMoves";
import { isKingInCheck } from "./isKingInCheck";

export function isCheckmate(board, color) {
    // Find the king's position
    let kingPosition = null;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            if (piece && piece.type === 'king' && piece.color === color) {
                kingPosition = { row, col };
                break;
            }
        }
    } 
    if (!kingPosition) {
        // No king found, technically this shouldn't happen in a valid game state
        return false;
    }

    // Check if the king is in check
    if (!isKingInCheck(board, color)) {
        return false; // Not in check, so can't be checkmate
    }

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            
            if (piece && piece.color === color) {
                const moves = getLegalMoves(board, { row, col });
                if (moves.length > 0) {
                    return false; // Escape exists
                }
            }
        }
    }
    return true;
}


export function isStalemate(board, color) {
    // 1. First, check if the king is in check
    // (If in check, it's either checkmate or just a normal check, not stalemate)
    if (isKingInCheck(board, color)) {
        return false; 
    }

    // 2. Check EVERY piece on the board for this color
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            
            // If it's the current player's piece...
            if (piece && piece.color === color) {
                // ...get ALL its legal moves
                const pieceMoves = getLegalMoves(board, { row, col });
                
                // If any piece has at least one move, it's NOT stalemate
                if (pieceMoves.length > 0) {
                    return false;
                }
            }
        }
    }

    // 3. If we checked every piece and found ZERO moves, it's stalemate
    return true; 
}
