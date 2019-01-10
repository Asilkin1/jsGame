
// main.js
'use strict'

// -------------------------- Select tiles placeholder
var tiles = document.querySelector('.tiles');
var tile = document.querySelectorAll('.tile');

// -------------------------- Select a template
var template = document.querySelector('#tile-template')
.content
.querySelector('.tile');

 for (var i = 1; i < 10; i++) {
        var newTile = template.cloneNode(true);
        newTile.children[0].textContent = i;
        tiles.appendChild(newTile);
    }

    tile.addEventListener('mousedown',function(e){
        e.preventDefault();

    var startXY = {
        x: e.clineX,
        y: e.clientY
    };

    var dragged = false;

    // Change coordinates when mouse position is changed
    var onMouseMove = function(moveEvent){
        moveEvent.preventDefault();
        dragged = true;
    
    var shift = {
        x: startXY.x - moveEvent.clientX,
        y: startXY.y - moveEvent.clientY
    };
    
    // Change start coordinates to current coordinates
    startXY = {
        x: moveEvent.clineX,
        y: moveEvent.clientY
    };
   
    // Change style for element that have to be moved
    tile.style.top = (tile.offsetTop - shift.y) + 'px';
    tile.style.left = (tile.offsetLeft - shift.x) + 'px';
    
};
document.addEventListener('mousemove', onMouseMove);
    });


// document.addEventListener('mouseup', onMouseUp);
