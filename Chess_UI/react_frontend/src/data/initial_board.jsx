
// Better Model for the board state: 2D array of objects, where each object has type and color properties.

const initial_board = [
        [{type: "rook", color: "white"},{type: "knight", color: "white"},{type: "bishop", color: "white"},{type: "queen", color: "white"},
         {type: "king", color: "white"},{type: "bishop", color: "white"},{type: "knight", color: "white"},{type: "rook", color: "white"}],
        [{type: "pawn", color: "white"},{type: "pawn", color: "white"},{type: "pawn", color: "white"},{type: "pawn", color: "white"},
         {type: "pawn", color: "white"},{type: "pawn", color: "white"},{type: "pawn", color: "white"},{type: "pawn", color: "white"}],

        Array(8).fill(null), 
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        
        [
         {type: "pawn", color: "black"},{type: "pawn", color: "black"},{type: "pawn", color: "black"},{type: "pawn", color: "black"},
         {type: "pawn", color: "black"},{type: "pawn", color: "black"},{ type: "pawn", color: "black" }, { type: "pawn", color: "black" }],
        [{type: "rook", color: "black"},{type: "knight", color: "black"},{type: "bishop", color: "black"},{type: "queen", color: "black"},
         {type: "king", color: "black"},{type: "bishop", color: "black"},{type: "knight", color:"black"},{type: "rook", color:"black"}],
        ];

export default initial_board;