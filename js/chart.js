let canvas = document.getElementById('mainCanva');

canvas.setAttribute('width', 500);
canvas.setAttribute('height', 500);
let c = canvas.getContext('2d');
c.lineWidth = 1;


function axios() {
	c.strokeStyle = 'black';
	c.beginPath();
	c.moveTo(0, 250);
	c.lineTo(500, 250);
	c.moveTo(250, 0);
	c.lineTo(250, 500);
	c.stroke();
}

function drawGraph(f, color) {
	c.strokeStyle = color;
	c.beginPath();
	for(let i = 0; i < 500; i += 1)
		c.arc(i,  -39 * f(6.28 / 500 * i - 3.14) + 250, 1, 0, Math.PI*2, true);
	c.stroke();
}

axios();