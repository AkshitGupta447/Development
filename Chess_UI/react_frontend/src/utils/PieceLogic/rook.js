import { isInsideBoard } from "../isInsideBoard";

function RookLogic(board, position, moves) {
    const { row, col } = position;

    // Directions: up, down, left, right
    const directions = [
        { dr: -1, dc: 0 }, 
        { dr: 1, dc: 0 },  
        { dr: 0, dc: -1 }, 
        { dr: 0, dc: 1 }   
    ];

    for (let dir of directions) {
        let newRow = row + dir.dr;
        let newCol = col + dir.dc;

        while(isInsideBoard(newRow, newCol)) {
            if (!board[newRow][newCol]) {
                moves.push({ row: newRow, col: newCol });
            } else {
                // If there's a piece, we can capture it if it's an opponent's piece, but can't move further
                if (board[newRow][newCol].color !== board[row][col].color) {
                    moves.push({ row: newRow, col: newCol });
                }
                break; // stop searching in this direction
            }
            newRow += dir.dr;
            newCol += dir.dc;
        }

    }
}

export { RookLogic };