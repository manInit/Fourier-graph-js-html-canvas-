let startBtn = document.getElementById('start');
let endBtn = document.getElementById('stop');

let id;
startBtn.addEventListener('click', () => {
	let f = x=> {
		if(x > 0 && x < Math.PI)
			return Math.PI / 4;
		else if(x > -Math.PI && x < 0)
			return Math.PI / 4 * -1
		else return 0;
	}

	let k = 1;
	id = setInterval(() => {
		c.clearRect(0, 0, canvas.width, canvas.height);
		axios();
		let func = fuirer(f, k);
		drawGraph(func, 'red');

		k+= 1;
		drawGraph(f, 'green');

		if(k == 100) clearTimeout(id);
	}, 200);
	
});

endBtn.addEventListener('click', () => {
	clearTimeout(id);
	k = 1;
});
