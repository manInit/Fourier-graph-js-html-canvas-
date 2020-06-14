let startBtn = document.getElementById('start');
let endBtn = document.getElementById('stop');
let answer = document.getElementsByClassName('answer')[0];
let input = document.getElementById('form');

let id;
startBtn.addEventListener('click', () => {
	let f = (x) => {
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



function max_ind (arr)
{
	let max = arr[0];
	let res = 0;
	for(let i = 0; i < arr.length; i++)
		if(arr[i] > max) {
			max = arr[i];
			res = i;
		}
	return res;
}

function zeros(arr)
{
	for(let i = 0; i<8; i++)
		if(arr[i] == 0) return false;
	return true;
}
