'use strict';

function roman(input) {
	let romanMap = {
		'M': [1000, 3], // 1000 - значение, 3 - кол-во допустимых повторений подряд.
		'CM': [900, 1],
		'D': [500, 1],
		'CD': [400, 1],
		'C': [100, 3],
		'XC': [90, 1],
		'L': [50, 1],
		'XL': [40, 1],
		'X': [10, 3],
		'IX': [9, 1],
		'V': [5, 1],
		'IV': [4, 1],
		'I': [1, 3]
	};

	let arab2rome = number => {
		let result = '';
		if (number <= 0 || number > 3999)
			return "Wrong Input";
		for (let i in romanMap) {
			let repeat = Math.floor(number / romanMap[i][0]);
			repeat = repeat > romanMap[i][1] ? romanMap[i][1] : repeat
			number -= repeat * romanMap[i][0];
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
				result += arab[i][0]
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