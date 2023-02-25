import Pawn from "./pawn.js";

class Player {
    constructor(player, id) {
        this.player = player;
        this.id = id;
        this.pawns = [];
        this.moves = [];
        this.state = 'inactive';
        this.current = false;
        this.#initPawns();
        this.#eventHandler();

    }

    hasFreePawns() {
        this.pawns.forEach((pawn) => { })
    }

    #initPawns() {
        for (let i = 0; i < 4; i++) {
            this.pawns.push(new Pawn(this.player, `${this.player}_${i + 1}`));
        }

        this.pawns.forEach((pawn) => {
            console.log(pawn)
            pawn.onclick = (e) => {
                console.log(`${pawn}`)
            }
        })
    }

    #eventHandler() {

    }
}

export default Player;