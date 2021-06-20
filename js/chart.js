export default class Canvas {
	constructor({
		canvasId, 
		width = 500, 
		heigth = 500, 
		context='2d'
	}) {
		let canvas = document.getElementById(canvasId);
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', heigth);
		
		this.c = canvas.getContext(context);
		c.lineWidth = 1;
	}

	drawAxios() {
		c.strokeStyle = 'black';
		c.beginPath();
		c.moveTo(0, 250);
		c.lineTo(500, 250);
		c.moveTo(250, 0);
		c.lineTo(250, 500);
		c.stroke();
	}

	_scalex(i) {
		return 2 * Math.PI / 500 * i - Math.PI;
	}

	drawGraph(f, color) {
		c.strokeStyle = color;
		c.beginPath();
		for(let i = 0; i < 500; i += 1)
			c.arc(i,  -39 * f(this._scalex(i)) + 250, 1, 0, Math.PI * 2, true);
		c.stroke();
	}
}

