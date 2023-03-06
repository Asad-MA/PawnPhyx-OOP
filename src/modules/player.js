import Pawn from "./pawn.js";
import Dice from "./dice.js";
import Board from "./board.js";

class Player {
    constructor(player, id) {
        this.player = player;
        this.id = `player_${id}`;
        this.colorCode = Board.colorCodes[this.player]
        this.index = id;
        this.username = ''
        this.avatar = '';
        this.pawns = [];
        this.moves = [];
        this.state = 'inactive';
        this.current = false;
        this.#initPawns();

    }

    hasFreePawns() {

        console.log(Dice.moves)
        for (const pawn of this.pawns) {
            if (pawn.state == 'ACTIVE') return true;
            if (Dice.moves.includes(6) && pawn.state == 'INACTIVE') return true;
            return false;
        }
    }

    #initPawns() {
        for (let i = 0; i < 4; i++) {
            this.pawns.push(new Pawn({
                color: this.player,
                id: this.index,
                index: i
            }));
        }
    }

}

export default Player;