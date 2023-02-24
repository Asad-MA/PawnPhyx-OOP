import Dice from "./modules/dice.js";
import Pawn from "./modules/pawn.js";
import Player from "./modules/player.js";


let players, format, colors;

function init() {

    //prompt('Choose No of player to play:');
    format = parseInt(prompt('Choose No of player to play:'));
    console.log(typeof format)
    if (format && typeof (format) === 'number') {
        switch (format) {
            case 4:
                players = [];
                colors = ['red', 'blue', 'yellow', 'green']
                console.log('4 player format Selected');
                //let
                colors.forEach((color) => {
                    players.push(new Player(color, `player_${colors.indexOf(color) + 1}`))
                })

                break;
            case 6:
                console.log('6 player format Selected')
                players = [];
                colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange']

                colors.forEach((color) => {
                    players.push(new Player(color, `player_${colors.indexOf(color) + 1}`))
                })
                break;
            default: console.log('Enter Number')
        }
    }
    else {
        console.log('Please Enter number')
    }

    console.log(players)
}

init();


// function format4Game() {
//     let player1 = new Player('red', 'player1');
//     let player2 = new Player('blue', 'player2');
//     let player3 = new Player('yellow', 'player3');
//     let player4 = new Player('green', 'player4');

//     players = [player1, player2, player3, player4];

//     console.log(players[0].pawns[0].canMove())
// }

// function format6Game() {
//     let player1 = new Player('red', 'player1');
//     let player2 = new Player('blue', 'player2');
//     let player3 = new Player('yellow', 'player3');
//     let player4 = new Player('green', 'player4');
//     let player5 = new Player('yellow', 'player5');
//     let player6 = new Player('green', 'player6');

//     players = [player1, player2, player3, player4, player5, player6];

//     console.log(players)
// }


//console.log(new Pawn('GREEN'));