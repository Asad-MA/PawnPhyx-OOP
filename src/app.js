import Dice from "./modules/dice.js";
import Pawn from "./modules/pawn.js";
import Player from "./modules/player.js";


//Start Menu





let players, format, colors, dice, pawns;

function init() {

    //prompt('Choose No of player to play:');
    format = parseInt(prompt('Choose No of player to play:'));
    console.log(typeof format)
    if (format && typeof (format) === 'number') {
        switch (format) {
            case 4:
                players = [];
                colors = ['red', 'blue', 'yellow', 'green']
                //placements = {}
                console.log('4 player format Selected');
                colors.forEach((color) => {
                    players.push(new Player(color, `player_${colors.indexOf(color) + 1}`))
                })
                dice = new Dice(players)
                break;
            case 6:
                console.log('6 player format Selected')
                players = [];
                colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange']

                colors.forEach((color) => {
                    players.push(new Player(color, `player_${colors.indexOf(color) + 1}`))
                })
                dice = new Dice(players)
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
console.log(dice)

function pawnHandler() {
    console.log(this)
}

dice.ele.onclick = () => {
    dice.roll();
    //console.log(players[dice.currentPlayer].hasFreePawns())
    if (!players[dice.currentPlayer].hasFreePawns()) {
        dice.nextPlayerMove();
        console.log('Next Player:', players[dice.currentPlayer])

    }
}

players.forEach((player) => {
    player.pawns.forEach((pawn) => {
        pawn.ele.onclick = () => {
            if (player.current && pawn.canMove()) {
                pawn.setProgress();
            }
        }
    })
})


