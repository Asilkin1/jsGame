// Get a DOM element for Canvas
var canvas = document.getElementById('canvas');

// Context of drawing
var ctx = canvas.getContext('2d');

var gradient = ctx.createRadialGradient(150,72,0,150,72,72);
gradient.addColorStop(0, 'green');
gradient.addColorStop(1,'rgba(0,255,0,0)');

// Set a color
ctx.fillStyle = gradient;
ctx.fillRect(0,0,300,150);

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(60,60);
ctx.stroke();

// Set text
ctx.font = '30px Tahoma';
ctx.textBaseline("hanging");
ctx.fillText('Hello',20,100);
// Create a 
ctx.strokeStyle = 'red';
