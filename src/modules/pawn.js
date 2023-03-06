import Board from "./board.js";
import Dice from "./dice.js";

class Pawn {
    constructor(props) {
        this.color = props.color;
        this.playerIndex = props.id;
        this.id = `${this.color}_${props.index}`;
        this.state = 'INACTIVE';
        this.lockStates = ['INACTIVE', 'WIN'];
        this.steps = -1;
        this.position = {
            x: 0,
            y: 0
        }
        this.defaultProps = {
            position: {
                x: 0,
                y: 0,
            }
        }
        //this.#createPawn();
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

    createPawn(props) {
        let ele = document.createElement('span');
        ele.className = 'pawn';
        ele.innerText = ` P `;
        // console.log(this.playerIndex)
        let index = this.playerIndex;
        console.log(index)
        console.log(Board.players[index].colorCode)
        ele.style.background = Board.players[index].colorCode;
        ele.style.cssText = `background-color: ${Board.players[index].colorCode}; left: ${props.x}px; top: ${props.y}px`;
        document.querySelector('#game-board').appendChild(ele);
        this.ele = ele;
        console.log(props)
        this.ele.onclick = () => Pawn.pawnHandler.apply(this)
    }

    updateProgress() {

    }


    static pawnHandler() {
        console.log(this.id)

    }
}


export default Pawn;
