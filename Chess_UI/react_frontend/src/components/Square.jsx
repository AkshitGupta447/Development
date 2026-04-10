import '../styles/square.css'

import Piece from './Piece';

function Square({position,pieceType,pieceColor, onClick, isSelected, isValidMove, isKingInCheck}) {
    // console.log(`Square Rendered`)

    const {row, col} = position;

    const isBlack = (row + col) % 2 === 1;
    const squareColor = isBlack ? 'black' : 'white';
    
    return(
        <div className={`square ${squareColor} ${isSelected ? "selected" : ""}`}
            onClick={onClick}
            style={{
                backgroundColor: isKingInCheck
                    ? "#ff0000"
                    : isValidMove
                    ? "#f6e05e"
                    : isBlack
                    ? "#b58863"
                    : "#f0d9b5"
            }}
            
        >

            {/* <h5>{i},{j}</h5> */}
            {pieceType  && <Piece pieceType={pieceType} pieceColor={pieceColor} />}

        </div>
    )
}

export default Square;