// events.js file
'use strict'

// ----------------------------- BUTTONS -------------------------------- 
var button = document.getElementById('add');
var removeButton = document.getElementById('remove');

// --------------------------- BUTTONS EVENTS ----------------------------
button.addEventListener('click', function () {
    // Render template item within a placeholder
    for (var i = 1; i < 10; i++) {
        var newTile = template.cloneNode(true);
        newTile.children[0].textContent = i;
        tiles.appendChild(newTile);
    }
});

// ---------------------- Remove a single tile ---------------------------
removeButton.addEventListener('click', function () {
    // while (tiles.firstChild) {

    tiles.removeChild(tiles.lastChild);
    //   }
});

// ------------------------- Handle keyboard events ----------------------
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 37) {
        console.log("Going left");
    }
    if (e.keyCode === 38) {
        console.log("Going up");
    }
    if (e.keyCode === 39) {
        console.log("Going right");
    }
    if (e.keyCode === 40) {
        console.log("Going down");
    }
});

// ---------------------------- Show menu --------------------------------
var callMenu = document.querySelector('.call-menu');
callMenu.addEventListener('click', function () {
    document.querySelector('.menu').classList.remove('hidden');
});