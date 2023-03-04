import Dice from "./dice.js";

class Pawn {
    constructor(color, id) {
        this.color = color;
        this.player = color;
        this.id = id;
        this.state = 'INACTIVE';
        this.lockStates = ['INACTIVE', 'WIN'];
        this.steps = -1;
        this.position = {
            x: 0,
            y: 0
        }
        this.#createPawn();
    }

    canMove() {
        if (Dice.moves.includes(6) && this.state == 'INACTIVE') return true;
        if (!this.lockStates.includes(this.state)) {
            console.log(`${this.id} is free`)
            return true;
        }
        return false;
    }

    canKill() {

    }

    isSafe() {

    }

    setProgress() {
        this.steps = this.steps + 1;
        console.log(`Pawn Steps: ${this.steps}`)
    }

    #createPawn() {
        let ele = document.createElement('span');
        ele.className = 'pawn';
        ele.innerText = ` ${this.color} pawn `;
        ele.style.background = `${this.color}`
        document.querySelector('body').appendChild(ele);
        this.ele = ele;
        this.ele.onclick = () => Pawn.pawnHandler.call(this);
    }

    updateProgress() {

    }

    static pawnHandler() {
        console.log(this.player)
    }
}


export default Pawn;
