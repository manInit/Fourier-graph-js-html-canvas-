import { getIntegralMethodRect } from './util.js';

export default class Fourier {
	_getA0(f) {
		return (1 / Math.PI) * getIntegralMethodRect(f, -Math.PI, Math.PI);
	}

	_getAk(f, k) {
		let func = x => f(x) * Math.cos(k * x);
		return (1 / Math.PI) * getIntegralMethodRect(func, -Math.PI, Math.PI);
	}

	_getBk(f, k) {
		let func = x => f(x) * Math.sin(k * x);
		return (1 / Math.PI) * getIntegralMethodRect(func, -Math.PI, Math.PI);
	}

	getFourierAproxFunction(f, k = 10) {
		return x => {
			let a0 = this._getA0(f);
			let res = a0 / 2;
			for(i = 1; i < k; i++) {
				res += this._getAk(f, i) * Math.cos(x * i) + this._getBk(f, i) * Math.sin(i * x);
			}
			return res;
		};
	}
}


