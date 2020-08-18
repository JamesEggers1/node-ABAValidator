"use strict";
module.exports = {
	validate: (routingNumber: string) => {
		const match = routingNumber.match(/^\s*([\d]{9})\s*$/);
		if (!match) {
			return false;
		}

		const weights = [3, 7 ,1];
		const aba = match[1];

		let sum = 0;
		for (let i=0 ; i<9 ; ++i) {
			sum += +aba.charAt(i) * weights[i % 3];
		}

		return (sum !== 0 && sum % 10 === 0);
	}
};