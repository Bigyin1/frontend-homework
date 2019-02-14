'use strict';

const romanMap = {
	'M': 1000,
	'CM': 900,
	'D': 500,
	'CD': 400,
	'C': 100,
	'XC': 90,
	'L': 50,
	'XL': 40,
	'X': 10,
	'IX': 9,
	'V': 5,
	'IV': 4,
	'I': 1
};

const arab2rome = (number) => {
	let result = "";
	if (number <= 0 || number > 3999)
		return "Wrong Input";
	Object.keys(romanMap).forEach((val) => {
		let repeat = Math.floor(number / romanMap[val]);
		number -= repeat * romanMap[val];
		result += val.repeat(repeat);
	})
	return result;
}

const rome2arab = (str) => {
	let result = 0;
	let currDigit = 0;
	let i = 0;
	const rome = Object.keys(romanMap);
	const arab = Object.values(romanMap);
	while (i < rome.length && currDigit < str.length) {
		if (str.substr(currDigit, rome[i].length) === rome[i]) {
			result += arab[i];
			currDigit += rome[i].length;
		} else {
			++i;
		}
	}
	return result;
}

const validateRoman = (str) => {
	str = str.toUpperCase();
	const result = rome2arab(str);
	return str === arab2rome(result) ? result : "Wrong Input";
}

/**
 * Translates roman/arab number to arab/roman number
 * @param {integer || string} input - Arabic or Roman number
 * @returns {integer || string} - Roman or Arabic representation of given number
 */
const roman = (input) => {
	if (Number(input) || input === 0) {
		return arab2rome(Number(input));
	} else {
		return validateRoman(input);
	}
}