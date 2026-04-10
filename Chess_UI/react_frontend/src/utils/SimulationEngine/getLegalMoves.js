import { getValidMoves } from "../moveLogic";
import { isKingInCheck } from "./isKingInCheck";
import { simulateMove } from "./simulatemove";



export const getLegalMoves = (board, position) => {
    const piece = board[position.row][position.col];
    if (!piece) return [];

    // 1. Get every move the piece could physically make
    const pseudoMoves = getValidMoves(board, position);

    // 2. Filter out moves that leave the King in check
    return pseudoMoves.filter(move => {
        const phantomBoard = simulateMove(board, position, move);

        const color = piece.color;
        let kingPos = null;
        board.forEach((row, r) => row.forEach((piece, c) => {
        if (piece?.type === 'king' && piece?.color === color) {
            kingPos = { row: r, col: c };
        }}));


        return !isKingInCheck(phantomBoard, piece.color, kingPos);
    });
};

