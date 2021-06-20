import { Canvas } from './canvas.js';
import { Fourier } from './fourier.js';

const canvas = new Canvas('mainCanvas');
let startBtn = document.getElementById('start');
let endBtn = document.getElementById('stop');
let idCounter;

startBtn.addEventListener('click', () => {
	
	let f = x => {
		if(x > 0 && x < Math.PI) return Math.PI / 4;
		else if(x > -Math.PI && x < 0) return Math.PI / 4 * -1
		else return 0;
	}

	let k = 1;
	idCounter = setInterval(() => {
		canvas.clear();
		canvas.drawAxios();
		let func = Fourier.getFourierAproxFunction(f, k);
		canvas.drawGraph(func, 'red');

		k+= 1;
		canvas.drawGraph(f, 'green');

		if(k == 10) clearTimeout(idCounter);
	}, 200);
	
});

endBtn.addEventListener('click', () => {
	clearTimeout(idCounter);
	k = 1;
});
