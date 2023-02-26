class Dice {
    constructor(colors) {
        this.players = colors;
        this.currentPlayer = 0;
        this.moves = [];
        this.rolled = false;
        this.#createDice()
    }

    roll() {
        if (this.rolled) return;
        let num = Math.floor(Math.random() * (7 - 1) + 1);
        if (num == 6) this.moves.push(num);
        else this.rolled = true;
        console.log(num)
    }

    nextPlayerMove() {
        if (this.currentPlayer + 1 == this.players.length) {
            this.currentPlayer = 0;
            console.log(this.players[this.currentPlayer].state)
            this.rolled = false;
            return;
        }
        this.currentPlayer = this.currentPlayer + 1;
        console.log(this.players[this.currentPlayer].state)
        // if (this.players[this.currentPlayer].state == 'inactive') nextPlayerMove();
    }

    #createDice() {
        let ele = document.createElement('img');
        ele.className = 'dice';
        ele.src = ` ${this.color} pawn `;
        ele.alt = `DICE`
        //ele.prop = this;
        //ele.style.background = `${this.color}`
        document.querySelector('body').appendChild(ele);
        this.ele = ele;
    }
}

export default Dice;