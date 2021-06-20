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
		
		this.width = width;
		this.heigth = heigth;
		this.c = canvas.getContext(context);
		this.c.lineWidth = 1;
	}

	drawAxios() {
		this.c.strokeStyle = 'black';
		this.c.beginPath();
		this.c.moveTo(0, this.height / 2);
		this.c.lineTo(this.width, this.height / 2);
		this.c.moveTo(this.width / 2, 0);
		this.c.lineTo(this.width / 2, this.height);
		this.c.stroke();
	}

	_scalex(x) {
		return 2 * Math.PI / this.width * x - Math.PI;
	}

	drawGraph(f, color) {
		this.c.strokeStyle = color;
		this.c.beginPath();
		for(let i = 0; i < this.width; i += 1)
			this.c.arc(i,  -39 * f(this._scalex(i)) + this.height / 2, 1, 0, Math.PI * 2, true);
		this.c.stroke();
	}

	clearCanvas() {
		this.c.clearRect(0, 0, this.width, this.height);
	}
}

