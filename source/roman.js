'use strict';

const romanMap = new Map();

romanMap.set('M', 1000);
romanMap.set('CM', 900);
romanMap.set('D', 500);
romanMap.set('CD', 400);
romanMap.set('C', 100);
romanMap.set('XC', 90);
romanMap.set('L', 50);
romanMap.set('XL', 40);
romanMap.set('X', 10);
romanMap.set('IX', 9);
romanMap.set('V', 5);
romanMap.set('IV', 4);
romanMap.set('I', 1);

/**
 * Gets arabic number, validates it and returns its roman representation
 * @param {integer} number - Arabic number
 * @returns {string} - Roman representation of given number or void(0)
 */
const arab2rome =
	(number) => {
		if (number <= 0 || number > 3999) {
			return void(0);
		}

		let res = Array.from(romanMap.keys()).reduce((result, roman) => {
			let arab = romanMap.get(roman);
			let repeat = Math.floor(number / arab);
			number -= repeat * arab;
			result += roman.repeat(repeat);
			return result;
		}, '');

		return res;
	}

/**
 * Gets roman number and returns its arabic representation
 * @param {string} str - Roman number
 * @returns {integer} - Arabic representation of given number
 */
const rome2arab =
	(str) => {
		let res = Array.from(romanMap.keys()).reduce((result, roman) => {
			let arab = romanMap.get(roman);
			while (result.currDigit < str.length) {
				let sub = str.substr(result.currDigit, roman.length);
				if (sub !== roman) break;
				result.result += arab;
				result.currDigit += roman.length;
			}
			return result;
		}, {
			'result': 0,
			'currDigit': 0
		});

		return res.result;
	}

/**
 * Gets roman numberm, validate it and returns its arabic representation
 * @param {string} str - Roman number
 * @returns {integer || string} - Arabic representation of given number or void(0)
 */
const validateRoman =
	(str) => {
		str = str.toUpperCase();
		const result = rome2arab(str);

		return str === arab2rome(result) ? result : void(0);
	}

/**
 * Translates roman/arab number to arab/roman number
 * @param {integer || string} input - Arabic or Roman number
 * @returns {integer || string} - Roman or Arabic representation of given number
 */
const roman = (input) => {
	if (isFinite(input)) {
		return arab2rome(Number(input));
	}

	if (typeof input === 'string' || input instanceof String) {
		return validateRoman(input);
	}

	return void(0);
}