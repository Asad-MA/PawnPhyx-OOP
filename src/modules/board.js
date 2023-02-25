class Board {
    constructor(players) {
        this.numOfPlayers = players;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    drawBoard() {
        if (this.numOfPlayers == 4) {
            console.log('Players 4 Board')
        }
        else if (this.numOfPlayers == 6) {
            console.log('Players 6 Board')
        }
    }
}


export default Board;