// let inv;

// function start() {
//     if (inv != null) {
//         clearInterval(inv);
//         inv = null;
//     }
// }
const canvas = document.getElementById("canvas");

const context = canvas.getContext("2d");

let x = 0;
let y = 200;

let state = 0;

context.beginPath();

function movement() {
    incrementMove();
    context.lineTo(x, y);
    context.stroke();
}


function left() {
    state--;
    if (state < 0)
        state = 3;

    incrementMove();
}

function right() {
    state++;
    if (state == 4)
        state = 0;

    incrementMove();
}

function incrementMove() {
    switch (state) {
        case 0:
            x++;
            break;
        case 1:
            y++;
            break;
        case 2:
            x--;
            break;
        default:
            y--;
            break;
    }
    if (context.isPointInStroke(x, y) || x < 0 || x > 400 || y < 0 || y > 400) {
        alert("Game Over!");
        x = 0;
        y = 200;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        state = 0;
        start();
    }

}

let stop = null;

function start() {

    if (stop == null)
        stop = setInterval(movement, 50);
    else {
        clearInterval(stop);
        stop = null;
    }
}
