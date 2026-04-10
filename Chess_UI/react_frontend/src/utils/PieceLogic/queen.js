import { Bishop } from "./bishop";
import { RookLogic } from "./rook";

function QueenLogic(board, position, moves){
    Bishop(board, position, moves);
    RookLogic(board, position, moves);
}

export { QueenLogic };