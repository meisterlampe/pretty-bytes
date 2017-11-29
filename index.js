'use strict';
const UNITS = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

module.exports = (num, locale = undefined) => {
	if (!Number.isFinite(num)) {
		throw new TypeError(`Expected a finite number, got ${typeof num}: ${num}`);
	}

	const neg = num < 0;

	if (neg) {
		num = -num;
	}

	if (num < 1) {
		return (neg ? '-' : '') + num + ' B';
	}

	const exponent = Math.min(Math.floor(Math.log10(num) / 3), UNITS.length - 1);
	const numStr = (num / Math.pow(1000, exponent)).toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	const unit = UNITS[exponent];

	return (neg ? '-' : '') + numStr + ' ' + unit;
};
