import Player from "./modules/player.js";
import Board from "./modules/board.js";

//Start Menu
let players, format, board, dice, pawns, gameBoard;

function init() {

    //prompt('Choose No of player to play:');
    let acceptedPlayers = [2, 3, 4, 5, 6];

    gameBoard = document.querySelector('#game-board');

    if (window.innerWidth > window.innerHeight) {
        gameBoard.style.width = '90vh'
        gameBoard.style.height = '90vh'
    }
    if (window.innerWidth < window.innerHeight) {
        gameBoard.style.width = '90vw'
        gameBoard.style.height = '90vw'
    }

    let stepRatio = document.querySelector('.block').clientWidth;
    let homeStops = document.querySelector('.start-block').clientWidth;
    //format = parseInt(prompt('Choose No of player to play:'));
    //console.log(typeof format)
    // if (format && typeof (format) === 'number' && acceptedPlayers.includes(format)) { //Development purpose
    board = new Board({
        format: 4,
        stepRatio,
        homeStops,
        width: gameBoard.clientWidth - 20,
        height: gameBoard.clientHeight - 20,
    });
    board.drawBoard();
    board.addPlayers(Player);
    window.onresize = () => syncsize();
    // }
    // else {
    //     console.log('Please Enter number')
    //    init();
    //}

    console.log(board)
}

function syncsize() {
    board.stepsratio = document.querySelector('.block').clientWidth;
    board.width = gameBoard.clientWidth - 20;
    board.height = gameBoard.clientHeight - 20;
    console.log(board)
}

init();
//console.log(Board.players)

// dice.ele.onclick = () => {
//     dice.roll();
//     //console.log(players[dice.currentPlayer].hasFreePawns())
//     if (!players[dice.currentPlayer].hasFreePawns()) {
//         dice.nextPlayerMove();
//         console.log('Next Player:', players[dice.currentPlayer])

//     }
// }

