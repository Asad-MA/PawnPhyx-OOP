import Dice from "./dice.js";

class Pawn {
    constructor(color, id) {
        this.color = color;
        this.playerIndex = id;
        this.id = `color_${id}`;
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
        if (Dice.moves.includes(6) && this.state == 'INACTIVE') {
            //this.state = 'ACTIVE';
            return true;
        }
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
        this.steps = this.steps + Dice.moves[0];
        Dice.moves.shift();

        console.log(`Pawn Steps: ${this.steps}`)
    }

    #createPawn() {
        let ele = document.createElement('span');
        ele.className = 'pawn';
        ele.innerText = ` ${this.color} pawn `;
        ele.style.background = `${this.color}`
        document.querySelector('body').appendChild(ele);
        this.ele = ele;
        this.ele.onclick = () => Pawn.clickHandler.apply(this)
    }

    updateProgress() {

    }

    static clickHandler() {
        console.log(this.id)
        if (this.canMove()) {

        }
    }
}


export default Pawn;
