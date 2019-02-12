'use strict';
/**
 * Translates roman/arab number to arab/roman number
 * @param {integer || string} input - Arabic or Roman number
 * @returns {integer || string} - Roman or Arabic representation of given number
 */
function roman(input) {
	let romanMap = {
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

	let arab2rome = number => {
		let result = "";
		if (number <= 0 || number > 3999)
			return "Wrong Input";
		for (let i in romanMap) {
			let repeat = Math.floor(number / romanMap[i]);
			number -= repeat * romanMap[i];
			result += i.repeat(repeat)
		}
		return result;
	}

	let rome2arab = str => {
		let result = 0;
		let currDigit = 0;
		let i = 0;
		let rome = Object.keys(romanMap)
		let arab = Object.values(romanMap)
		str = str.toUpperCase();
		while (i < rome.length && currDigit < str.length) {
			if (str.substr(currDigit, rome[i].length) === rome[i]) {
				result += arab[i]
				currDigit += rome[i].length
			} else
				++i;
		}
		return result
	}

	let validateRoman = str => {
		let result = rome2arab(str)
		if (str.toUpperCase() === arab2rome(result))
			return result
		else
			return "Wrong Input"
	}

	let solver = input => {
		if (Number(input) || input === 0)
			return arab2rome(Number(input))
		else
			return validateRoman(input)
	}

	return solver(input)
}