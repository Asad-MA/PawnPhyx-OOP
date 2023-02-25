import Dice from "./modules/dice.js";
import Pawn from "./modules/pawn.js";
import Player from "./modules/player.js";


//Start Menu





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
                placements = {}
                console.log('4 player format Selected');
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
            default:
                console.log('Enter Number less than or equal to 6')
                init();
        }
    }
    else {
        console.log('Please Enter number')
        init();
    }

    console.log(players)
}

init();


