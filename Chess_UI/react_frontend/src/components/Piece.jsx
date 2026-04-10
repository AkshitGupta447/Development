import whitePawn from '../assets/pieces-svg/bpawn-w.svg';
import whiteRook from '../assets/pieces-svg/rook4-w.svg';
import whiteKnight from '../assets/pieces-svg/rknight-w.svg';
import whiteBishop from '../assets/pieces-svg/bishop-w.svg';
import whiteQueen from '../assets/pieces-svg/rqueen-w.svg';
import whiteKing from '../assets/pieces-svg/king-w.svg';
import blackPawn from '../assets/pieces-svg/bpawn-b.svg';
import blackRook from '../assets/pieces-svg/rook4-b.svg';
import blackKnight from '../assets/pieces-svg/rknight-b.svg';
import blackBishop from '../assets/pieces-svg/bishop-b.svg';
import blackQueen from '../assets/pieces-svg/rqueen-b.svg';
import blackKing from '../assets/pieces-svg/king-b.svg';


import '../styles/pieces.css'

const PIECE_MAP = {
            white: {
                pawn: whitePawn,
                rook: whiteRook,
                knight: whiteKnight,
                bishop: whiteBishop,
                queen: whiteQueen,
                king: whiteKing
            },
            black: {
                pawn: blackPawn,
                rook: blackRook,
                knight: blackKnight,
                bishop: blackBishop,
                queen: blackQueen,
                king: blackKing
            }
};


const Piece = ({pieceType, pieceColor}) => { 

    

    //console.log("Looking up:", pieceColor, pieceType); // What does this show?

    const image = PIECE_MAP[pieceColor]?.[pieceType];
    if (!image) return null;

    //console.log("Image found:", image); // Is this a string path or undefined?
    
    return (
        <div 
            className="piece" 
            style={{ 
            // Wrap the image variable in double quotes inside the url()
            backgroundImage: `url("${image}")` 
        }}
        />
    )
}

export default Piece;