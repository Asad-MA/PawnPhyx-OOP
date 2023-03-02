import Pawn from "./pawn.js";
import Dice from "./dice.js"
class Player {
    constructor(player, id) {
        this.player = player;
        this.id = id;
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
            this.pawns.push(new Pawn(this.player, `${this.player}_${i + 1}`));
        }
    }

}

export default Player;