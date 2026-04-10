import { PawnLogic } from "./PieceLogic/Pawn";
import { KnightLogic } from "./PieceLogic/knight";
import { RookLogic } from "./PieceLogic/rook";
import { Bishop } from "./PieceLogic/bishop";
import { QueenLogic } from "./PieceLogic/queen";
import { KingLogic } from "./PieceLogic/king";

const pieceLogicMap = {
    pawn: PawnLogic,
    knight: KnightLogic,
    rook: RookLogic,
    bishop: Bishop,
    queen: QueenLogic,
    king: KingLogic
};

export const getValidMoves = (board, position) => {
    const piece = board[position.row][position.col];
    if (!piece) return [];

    const moves = [];
    const logic = pieceLogicMap[piece.type];

    if (logic) {
        logic(board, position, moves);
    }

    return moves;
};