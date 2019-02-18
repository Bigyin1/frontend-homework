'use strict';

const romanMap = new Map(Object.entries({
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
}));

/**
 * Gets arabic number, validates it and returns its roman representation
 * @param {integer} number - Arabic number
 * @returns {string} - Roman representation of given number or void(0)
 */
const arab2rome =
	(number) => {
		let result = '';
		if (number <= 0 || number > 3999) {
			return void(0);
		}
		romanMap.forEach((arab, rome) => {
			let repeat = Math.floor(number / arab);
			number -= repeat * arab;
			result += rome.repeat(repeat);
		})
		return result;
	}

/**
 * Gets roman number and returns its arabic representation
 * @param {string} str - Roman number
 * @returns {integer} - Arabic representation of given number
 */
const rome2arab =
	(str) => {
		let result = 0;
		let currDigit = 0;
		romanMap.forEach((arab, rome) => {
			while (currDigit < str.length) {
				if (str.substr(currDigit, rome.length) === rome) {
					result += arab;
					currDigit += rome.length
					continue;
				}
				break;
			}
		})
		return result;
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
	} else if (typeof input === 'string') {
		return validateRoman(input);
	}
	return void(0)
}