function scalex(i) {
	return 6.28 / 500 * i - 3.14;
}

function integral(f, a, b, n = 1000) {
	let res = 0;
	h = (b - a) / n;
	for (let i = a; i < b; i += h) {
		res += f(i) * h;
	}
	return res;
}


function get_a0(f) {
	return (1 / Math.PI) * integral(f, -Math.PI, Math.PI);
}

function get_ak(f, k) {
	let func = x => f(x) * Math.cos(k * x);

	return (1 / Math.PI) * integral(func, -Math.PI, Math.PI);
}

function get_bk(f, k) {
	let func = x => f(x) * Math.sin(k * x);

	return (1 / Math.PI) * integral(func, -Math.PI, Math.PI);
}

function fuirer(f, k = 10) {
	let func = x => {
		let a0 = get_a0(f);
		let res = a0 / 2;
		for(i = 1; i < k; i++) {
			res += get_ak(f, i) * Math.cos(x*i) + get_bk(f, i) * Math.sin(i*x);
		};
		return res;
	};

	return func;
}

