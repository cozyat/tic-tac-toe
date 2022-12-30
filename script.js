const box = document.querySelectorAll(".box");
const statusText = document.querySelector("#statusText");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
let running = false;

function handleDragStart(e) {
    this.style.opacity = '0.4';
}

function handleDragEnd(e) {
    this.style.opacity = '1.1';
}

let items = document.querySelectorAll('.container .box');
items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});

function allowDrop(ev) {
    ev.preventDefault();

    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data).cloneNode(true));
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const boxA = options[condition[0]];
        const boxB = options[condition[1]];
        const boxC = options[condition[2]];

        if (boxA == "" || boxB == "" || boxC == "") {
            continue;
        }

        if (boxA == boxB && boxB == boxC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        round_response = alert("The participating player has won!");
        running = false;
    } else if (!options.includes("")) {
        round_response = alert("Draw!");
        running = false;
    } else {
        // Resuming Game
    }
}

function resetBoard() {
    const reset_response = confirm("Are you sure you want to reset?")
    if (reset_response === true) {
        location.reload();
        return true;
    } else {
        setTimeout(() => {
            alert("Resuming your game now.");
        }, 400);
    }
}

document.getElementById("1")