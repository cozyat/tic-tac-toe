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
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data).cloneNode(true));
}

function resetBoard() {
    const response = confirm("Are you sure you want to reset?")
    if (response === true) {
        location.reload();
        return true;
    } else {
        alert("Resuming your game now.")
    }
}