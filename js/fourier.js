import { getIntegralMethodRect } from './util.js';

export default class Fourier {
	static _getA0(f) {
		return (1 / Math.PI) * getIntegralMethodRect(f, -Math.PI, Math.PI);
	}

	static _getAk(f, k) {
		let func = x => f(x) * Math.cos(k * x);
		return (1 / Math.PI) * getIntegralMethodRect(func, -Math.PI, Math.PI);
	}

	static _getBk(f, k) {
		let func = x => f(x) * Math.sin(k * x);
		return (1 / Math.PI) * getIntegralMethodRect(func, -Math.PI, Math.PI);
	}

	static getFourierAproxFunction(f, k = 10) {
		return x => {
			let a0 = Fourier._getA0(f);
			let res = a0 / 2;
			for(i = 1; i < k; i++) {
				res += Fourier._getAk(f, i) * Math.cos(x * i) + Fourier._getBk(f, i) * Math.sin(i * x);
			}
			return res;
		};
	}
}


