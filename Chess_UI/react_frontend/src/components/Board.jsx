import Square from "./Square";
import { useEffect, useState } from "react";

import initial_board from "../data/initial_board";
import '../styles/board.css'

//import { getValidMoves } from "../utils/moveLogic";
import { getLegalMoves } from "../utils/SimulationEngine/getLegalMoves";
import { isKingInCheck } from "../utils/SimulationEngine/isKingInCheck";

import { isCheckmate, isStalemate } from "../utils/SimulationEngine/checkMate";

import { getBestMove } from "../engine/ai/getBestMove";
import { simulateMove } from "../utils/SimulationEngine/simulatemove";


function Board() {

    useEffect(() => {
        console.log("Board Mounted")
    }, [])
    
    const [selectedSquare, setSelectedSquare] = useState(null); // e.g., [0, 0]
    const [board, setBoard] = useState(initial_board);
    
    const [validMoves, setValidMoves] = useState([]);

    const [turn,setturn] = useState('white');
    const [gameOver, setGameOver] = useState(false);


    const [history, setHistory] = useState([]); // {from,to,piece,capturedPiece}
    // Undo/Redo functionality would use this history to revert the board state

    const handleSquareClick = (position) => {
        if (gameOver) return; // ignore clicks if game is over

        if (!selectedSquare) {
            handleSelect(position);
        } 
        else{
            handleMove(position);

        }
    };

    const handleSelect = ({ row, col }) => {
        const piece = board[row][col];

        if (piece === null || piece.color !== turn) {
            //console.log("Empty Square Selected, Invalid", {row, col});
            if (piece !== null) {
                console.log("Selected piece color:", piece.color, "Current turn:", turn);
            }
            return; // ignore empty
        } 

        setSelectedSquare({ row, col });

        // Calculate and store moves for the UI to highlight
        const moves = getLegalMoves(board, { row, col });
        setValidMoves(moves);
    };

    const handleMove = ({ row, col }) => {
        const from = selectedSquare;
        const to = { row, col };
        
        // Check if the clicked square is in our validMoves list
        const isValid = validMoves.some(m => m.row === to.row && m.col === to.col);

        if (!isValid) {
            console.log("Invalid move for this piece");
            setSelectedSquare(null);
            setValidMoves([]);
            return;
        }
        
        // immutable update of 2D array, don't ever do manual nested loops to copy, always use map or spread, because of reference issues 
        const newBoard = board.map(r => [...r]);

        // Move piece
        newBoard[to.row][to.col] = newBoard[from.row][from.col];
        newBoard[from.row][from.col] = null;

        if (isCheckmate(newBoard, turn === 'white' ? 'black' : 'white')) {
            alert(`${turn} wins by Checkmate!`);
            setGameOver(true);
        } 
        else if (isStalemate(newBoard, turn === 'white' ? 'black' : 'white')) {
            alert("Draw by Stalemate!");
            setGameOver(true);
        } 

        if (turn === "white") {
        const aiMove = getBestMove(newBoard, 2);

        if (aiMove) {
            const updatedBoard = simulateMove(
                newBoard,
                aiMove.from,
                aiMove.to
            );

            setBoard(updatedBoard);
            setturn("white");
            setSelectedSquare(null);
        }
        } else {

        setBoard(newBoard);
        setSelectedSquare(null);
        setValidMoves([]);

        setturn(turn === 'white' ? 'black' : 'white');}
    };

    const s = "History: Redo | Undo";

    return(
        <>

            <div><p>{s}</p></div>

            <div className="board">
                
                {board.map((row, i) => 
                        row.map((piece, j) => (
                            

                                <Square key={`${i}-${j}`}
                                    position={{ row: i, col: j }}
                                    pieceType={piece?.type}
                                    pieceColor={piece?.color}
                                    isSelected={selectedSquare?.row === i && selectedSquare?.col === j}

                                    isValidMove={validMoves.some(m => m.row === i && m.col === j)}
                                    onClick={() => handleSquareClick({ row: i, col: j })}
                                    isCheck = {isKingInCheck(board, turn, { row: i, col: j })}
                                />

                            ))
                        )}    
            </div>
        </>
    )
}

export default Board;