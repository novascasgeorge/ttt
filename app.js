/*-------------------------------- Constants --------------------------------*/





/*---------------------------- Variables (state) ----------------------------*/

let board, turn, Winner


/*---------------------------Variables---------------------------*/





/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/




/*---------- Functions --------------------------------*/

init()

function init() {
board = [null, null, null, null, null, null, null, null, null] 
turn = 1 
winner = null
render ()
}


function render () {

board.forEach((cell, idx) => {}
 if (cell === 1) {
cellLetter = 'X'
} else if (cell === -1) {
 cellLetter = 'O' 
} else if (cell === null) {
  cellLetter = ''
}

squareEls[idx].textContent = 'X'
squareEls[idx].style.backgroundcolor = 'pink'



1) Define the required variables used to track the state of the game



2) Store cached element references

3) Upon loading, the game state should be initialized, and a function should be 
   called to render this game state

4) The state of the game should be rendered to the user

5) Define the required constants

6) Handle a player clicking a square with a `handleClick` function

7) Build the `getWinner` function

8) Create Reset functionality