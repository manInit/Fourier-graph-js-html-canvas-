import CanvasGraph from './canvasGraph.js';
import Fourier from './fourier.js';

const canvas = new CanvasGraph({
	canvasId: 'mainCanvas'
});
let startBtn = document.getElementById('start');
let endBtn = document.getElementById('stop');
let idCounter;



let k = 0;
startBtn.addEventListener('click', () => {
	
	let f = x => {
		if(x > 0 && x < Math.PI) return Math.PI / 4;
		else if(x > -Math.PI && x < 0) return Math.PI / 4 * -1
		else return 0;
	}
	canvas.drawAxios();
	k = 1;
	idCounter = setInterval(() => {
		canvas.clear();
		canvas.drawAxios();
		let func = Fourier.getFourierAproxFunction(f, k);
		canvas.drawGraph(func, 'red');

		k += 1;
		console.log(k);
		canvas.drawGraph(f, 'green');

		if(k == 20) clearTimeout(idCounter);
	}, 200);
	
});

endBtn.addEventListener('click', () => {
	clearTimeout(idCounter);
	k = 1;
});
