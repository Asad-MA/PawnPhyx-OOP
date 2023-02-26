import Pawn from "./pawn.js";

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
        this.pawns.forEach((pawn) => {
            if (pawn.state == 'ACTIVE') return true;
            return false;
        })
    }

    #initPawns() {
        for (let i = 0; i < 4; i++) {
            this.pawns.push(new Pawn(this.player, `${this.player}_${i + 1}`));
        }
    }

}

export default Player;