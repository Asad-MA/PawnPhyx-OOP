class Pawn {
    constructor ( color  ) {
        this.color = color;
        this.player = color;
        this.state = 'INACTIVE';
        this.steps = -1;
        this.position = {
            x: 0,
            y: 0
        }

    }

    canMove(){

    }

    canKill(){

    }
}


export default Pawn;