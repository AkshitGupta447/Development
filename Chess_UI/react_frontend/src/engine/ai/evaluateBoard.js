
const pieceValues = {
    pawn: 1,
    knight: 3,
    bishop: 3,
    rook: 5,
    queen: 9,
    king: 1000
};

export function evaluateBoard(board) {
    let score = 0;

    for (let row of board) {
        for (let piece of row) {
            if (!piece) continue;

            const value = pieceValues[piece.type];

            score += piece.color === "black" ? value : -value;
        }
    }

    return score;
}
