# Chess in React

## 1. Data Driven Chess Board with Initial State

### Board (smart state handler) -> Square -> Piece

Initial Board is just a 2D array with different pieces that determine initial state. To start we can have BK,WQ but the optimal approach is to use a object of {type & color}.

The inital board is passed to Board.jsx which will pass inforation to Square and that to Pieces.

### UseState Superimacy 
On first click State is null that means {i,j} are the selected_index and on second click state is not null means that click represents the location {i,j} piece wnats to go to. After doing this transformation we would have setState equal to NULL

Square will have the props that Boards will send to it and based on that prop it will decide mainly, what color is the square, which square to highlight and when (passing the above useState in prop from board) and the further information for Piece.

Piece will just act as a display unit for chess pieces. 


## 2. Movement System

### User Clicks -> Intent -> State Transition -> UI Update

SelectSquare UseEffect -> 1st click = Select & 2nd Click = Move


## 3. Movement Rules (Valid Moves)

Here UseState (validMove), i.e. use state whenever you need to change UI automatically if value changes.

### click -> select -> Calculate Valid Moves -> Highlight -> Allow Valid Moves Only

Pawn :- +1, +2 (first move), diagonal attack
Knight: 2.5 steps => 8 possible moves map
Rook: 4 directions until a piece | board_end
Bishop: 4 diagonal directions
Queen: Rook + Bishop
King: +-1,+-1 => 8 cases

### UI - Triggers, Logic - Decide, State - Update

## 4. Simulation Engine

If a valid move leads to a discovered check thats not a Valid Move but legal move.
A simple way to solve is to simulate all moves and see if any discovered check there or not.

### GetLegalMoves => (simulate and see what happens) 
getValidMove (get valid moves of user to simulate them)
simulateMove (create a Phantom Board and perform the move)
isKinginCheck (for all the opponent piece check if King in check and not return that move as Legal)

### User Action (Select Piece) -> Generate Moves -> Simulate and Validate Moves -> UI Valid Moves -> User Action (Move Piece)


## 5. CheckMate, Stalemate
Bugs to solve

## 6. Minimax AI
Later