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
        //this.ele = '';
        this.#createPawn();
    }

    canMove() {
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

    updatePawn() {
        this.steps = this.steps + 1;
    }

    #createPawn() {
        let ele = document.createElement('span');
        ele.className = 'pawn';
        ele.innerText = ` ${this.color} pawn `;
        ele.style.background = `${this.color}`
        document.querySelector('body').appendChild(ele);
        this.ele = ele;
    }

    updateProgress() {

    }
}


export default Pawn;
