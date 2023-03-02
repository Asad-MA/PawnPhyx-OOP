class Dice {
    constructor(colors) {
        this.players = colors;
        this.currentPlayer = 0;
        //this.moves = [];
        this.rolled = false;
        this.#createDice()

    }
    static moves = [];

    roll() {
        if (this.rolled) {
            console.log('Already Rolled'); return;
        }
        let num = Math.floor(Math.random() * (7 - 1) + 1);
        if (num == 6 || Dice.moves[Dice.moves.length] == 6) Dice.moves.push(num);
        else this.rolled = true;
        console.log(this, num)
    }

    nextPlayerMove() {
        this.currentPlayer + 1 == this.players.length
            ? this.currentPlayer = 0
            : this.currentPlayer = this.currentPlayer + 1;

        console.log(this.players[this.currentPlayer].state)
        this.rolled = false;
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