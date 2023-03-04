class Board {
    constructor(players) {
        this.numOfPlayers = players;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    #colors = ['red', 'blue', 'yellow', 'green', 'orange', 'yellow']
    static players = [];
    drawBoard() {
        if (this.numOfPlayers < 5 && this.numOfPlayers > 1) {
            console.log('Players 4 Board')
        }
        else if (this.numOfPlayers > 4 && this.numOfPlayers < 7) {
            console.log('Players 6 Board')
        }
    }

    addPlayers() {

    }
}


export default Board;