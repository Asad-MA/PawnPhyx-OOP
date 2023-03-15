class Board {
    constructor(props) {
        this.numOfPlayers = props.format;
        this.width = props.width;
        this.height = props.height;
        this.stepsratio = props.stepRatio;
        this.homeStops = props.homeStops;
    }

    static colorCodes = {
        red: '#f1786b',
        blue: '#41b3e2',
        green: '#5ac8ae',
        yellow: '#fbd984',
        orange: '',
        purple: ''
    }

    #defaultPositions() {
        return {
            red: [
                { x: this.width - (this.homeStops / 2), y: this.height - (this.height - (this.homeStops / 2.5)) },
                { x: this.width - (this.homeStops + (this.homeStops / 2)), y: this.height - (this.height - (this.homeStops / 2.5)) },
                { x: this.width - (this.homeStops / 2), y: this.height - (this.height - (this.homeStops + (this.homeStops / 2))) },
                { x: this.width - (this.homeStops + (this.homeStops / 2)), y: this.height - (this.height - (this.homeStops + (this.homeStops / 2))) },
            ],
            blue: [
                { x: this.homeStops + (this.homeStops / 2), y: this.height - (this.height - (this.homeStops / 2.5)) },
                { x: this.homeStops / 2, y: this.height - (this.height - (this.homeStops / 2.5)) },
                { x: this.homeStops + (this.homeStops / 2), y: this.height - (this.height - (this.homeStops + (this.homeStops / 2))) },
                { x: this.homeStops / 2, y: this.height - (this.height - (this.homeStops + (this.homeStops / 2))) },
            ],
            green: [
                { x: this.width - (this.homeStops / 2), y: this.homeStops * 3 + this.stepsratio * 2 },
                { x: this.width - (this.homeStops + (this.homeStops / 2)), y: this.homeStops * 3 + this.stepsratio * 2 },
                { x: this.width - (this.homeStops / 2), y: this.homeStops * 4 + this.stepsratio * 2 },
                { x: this.width - (this.homeStops + (this.homeStops / 2)), y: this.homeStops * 4 + this.stepsratio * 2 },
            ],
            yellow: [
                { x: this.homeStops + (this.homeStops / 2), y: this.homeStops * 3 + this.stepsratio * 2 },
                { x: this.homeStops / 2, y: this.homeStops * 3 + this.stepsratio * 2 },
                { x: this.homeStops + (this.homeStops / 2), y: this.homeStops * 4 + this.stepsratio * 2 },
                { x: this.homeStops / 2, y: this.homeStops * 4 + this.stepsratio * 2 },
            ]
        }

    }



    #colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']

    static players = [];
    drawBoard() {
        if (this.numOfPlayers < 5 && this.numOfPlayers > 1) {
            console.log('Players 4 Board')
        }
        if (this.numOfPlayers > 4 && this.numOfPlayers < 7) {
            console.log('Players 6 Board')
        }
    }

    addPlayers(Player) {
        for (let i = 0; i < this.numOfPlayers; i++) {
            let x = 0;
            Board.players.push(new Player(this.#colors[i], i));
            Board.players[i].pawns.forEach(pawn => {
                pawn.createPawn(this.#defaultPositions()[this.#colors[i]][x]);
                x++;
            });
        }
    }

    syncSize() {

    }
}


export default Board;