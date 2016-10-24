var mousedown = false;
var oldx = null;
var oldy = null;
var x='rgb(0, 0, 50)';
var c;
var cx;
var imgData;
var iDa = [];
var noun = 0 ;

c = document.querySelector('canvas');
cx = c.getContext('2d');
function store(){
iDa[noun]=cx.getImageData(0,0,c.width,c.height);
imgData=cx.getImageData(0,0,c.width,c.height);
noun++;
}

function display(){  //UNDO
imgData = iDa[noun-1];
cx.putImageData(imgData,0,0);
noun--;
}

function misplay(){ //REDO
imgData = iDa[noun];
cx.putImageData(imgData,0,0);
noun++;
}

// function downloadCanvas(link, canvasId, filename) {
//     link.href = document.getElementById(canvasId).toDataURL();
//     link.download = filename;
// }
//
// document.getElementById('download').addEventListener('click', function() {
//     downloadCanvas(this, 'canvas', 'test.png');
// }, false);

// function downlodeit(){
// 	this.href = document.getElementById('canvas').toDataURL();
//     this.download = 'painting.png';
// 	console.log(this.download);
// 	console.log('asdfgh');
// 	//downloadCanvas(this, 'canvas', 'test.png');
// }

// $('body').CanvasToPhp.upload({
// canvasId: "canvas",   // passing the canvasId
// image: "455.jpg"      // passing the image path
// });
//
// // downloading file
// $('#download').click(function(){
//     $('body').CanvasToPhp.download({
//         canvasId: "canvas"   // passing the canvas id
//     });  //
// });


function resizeCanvas(){
	c.height = window.innerHeight/1.2;
	c.width = window.innerWidth /1.5;
}
function setupCanvas() {
	resizeCanvas();
	cx.lineWidth = 1;
	cx.lineCap = 'round';
	cx.strokeStyle = x;
}

function capchange(p){
	var rap=p.id;
	cx.lineCap= rap;
}

function color(obj) {
	switch (obj.id) {
		case "green":
			x = "green";
			break;
		case "gray":
			x="gray";
			break;
		case "silver":
			x="silver";
			break;
		case "navy":
			x="navy";
			break;
		case "teal":
			x="teal";
			break;
		case "aqua":
			x="aqua";
			break;
		case "lime":
			x="lime";
			break;
		case "olive":
			x="olive";
			break;
		case "maroon":
			x= "maroon";
			break;
		case "purple":
			x="purple";
			break;
		case "blue":
			x = "blue";
			break;
		case "red":
			x = "red";
			break;
		case "yellow":
			x = "yellow";
			break;
		case "orange":
			x = "orange";
			break;
		case "black":
			x = "black";
			break;
		case "white":
			x = "white";
			break;
	}
	cx.strokeStyle =x ;
}
function brod(x){
	cx.lineWidth = x.value;

}
function onmousedown(ev){
	mousedown = true;
	ev.preventDefault();
	//store();
}
function onmouseup(ev) {
	mousedown = false;
	ev.preventDefault();
	oldx = null;
	oldy = null;
	store();
}
function onmousemove(ev) {
	var x = ev.clientX;
	var y = ev.clientY;
	if (mousedown) {
		paint(x, y);
	}
}
function paint(x, y) {
	cx.beginPath();
	if (oldx > 0 && oldy > 0) {
		cx.moveTo(oldx , oldy-10);
	}
	cx.lineTo(x, y -10);
	cx.stroke();
	cx.closePath();
	oldx = x;
	oldy = y;
}
c.addEventListener('mousedown', onmousedown, false);
c.addEventListener('mouseup', onmouseup, false);
c.addEventListener('mousemove', onmousemove, false);
setupCanvas();
