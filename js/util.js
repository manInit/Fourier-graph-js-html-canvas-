export function getIntegralMethodRect(f, a, b, n = 1000) {
	let res = 0;
	h = (b - a) / n;
	for (let i = a; i < b; i += h) {
		res += f(i) * h;
	}
	return res;
}