'use strict';

const romanMap = new Map([
	['M', 1000],
	['CM', 900],
	['D', 500],
	['CD', 400],
	['C', 100],
	['XC', 90],
	['L', 50],
	['XL', 40],
	['X', 10],
	['IX', 9],
	['V', 5],
	['IV', 4],
	['I', 1],
]);

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

		const res = Array.from(romanMap).reduce((result, [
			roman,
			arab
		]) => {
			const repeat = Math.floor(number / arab);
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
		const {
			result,
		} = Array.from(romanMap).reduce((result, [
			roman,
			arab
		]) => {
			while (result.currDigit < str.length) {
				const sub = str.substr(result.currDigit, roman.length);
				if (sub !== roman) break;
				result.result += arab;
				result.currDigit += roman.length;
			}
			return result;
		}, {
			'result': 0,
			'currDigit': 0
		});

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
	}

	if (typeof input === 'string' || input instanceof String) {
		return validateRoman(input);
	}

	return void(0);
}