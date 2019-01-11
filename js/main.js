// main.js
'use strict'

// -------------------------- Select tiles placeholder
var tiles = document.querySelector('.tiles');

// -------------------------- Select a template
var template = document.querySelector('#tile-template')
.content
.querySelector('.tile');

for (var i = 1; i < 9; i++) {
    var newTile = template.cloneNode(true);
    newTile.children[0].textContent = i;
    tiles.appendChild(newTile);
}

var tile = document.querySelector('.tile');

tile.addEventListener('mousedown',function(e){
    e.preventDefault();

    var startXY = {
        x: e.clientX,
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
        x: moveEvent.clientX,
        y: moveEvent.clientY
    };
        console.log(startXY.x , startXY.y);
        // Change style for element that have to be moved
        tile.style.top = (tile.offsetTop - shift.y) + 'px';
        tile.style.left = (tile.offsetLeft - shift.x) + 'px';
    
};

    var onMouseUp = function(upEvent){
      upEvent.preventDefault();
     
      tile.removeEventListener('mousemove',onMouseMove);
      tile.removeEventListener('mouseup',onMouseUp);
      if(dragged){
          var onClickPreventDefault = function(event){
              event.preventDefault();
              tile.removeEventListener('click', onClickPreventDefault);
          };
          tile.addEventListener('click', onClickPreventDefault);
      }  
    };

    tile.addEventListener('mousemove', onMouseMove);
    tile.addEventListener('mouseup',onMouseUp);
});
