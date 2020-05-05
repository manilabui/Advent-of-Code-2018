const fs = require('fs');

// part 1
const checkSum = arr => {
	let doubleCount = 0;
	let tripleCount = 0;

	for (let i = 0; i < arr.length; i++) {
		let currStr = arr[i];
		let currDoubleCount = 0;
		let currTripleCount = 0;

		while (currStr.length) {
			const currChar = currStr[0];
			const numOfCurrChar = currStr.split(currChar).length - 1;

			if (numOfCurrChar === 2) currDoubleCount++;
			if (numOfCurrChar === 3) currTripleCount++;

			currStr = currStr.split(currChar).join('');
			
			if (!currStr.length) {
				if (currDoubleCount) doubleCount++;
				if (currTripleCount) tripleCount++;
			}
		}
	}
	
	return doubleCount * tripleCount;
}

// part 2
const correctBoxes = arr => {
	while(arr.length > 1) {
		// Index starts at 1, because there are 2 strings to compare.
		for (let i = 1; i < arr.length; i++) {
			const firstStr = arr[0];
			const secondStr = arr[i];
			let currMatch = [];
			// Loop through the characters of first and second strings simultaneously.
			for (let j = 0; j < firstStr.length; j++) {
				const currFirstChar = firstStr[j];
				const currSecondChar = secondStr[j];
				// Add character at currPos if they match & break out of loop as soon as more than one set doesn't match.
				if (currFirstChar === currSecondChar) currMatch.push(currFirstChar);
				if (j > currMatch.length) break;
				// If end of string is reached, then it's the answer.
				if (j === firstStr.length - 1) return currMatch.join('');
			}
		}
		// Remove first string from array. It has been checked.
		arr.shift();
	}	
}

// execute
fs.readFile('day_2/input.txt', (err, data) => {
  const input = data.toString().split('\n');
	const result1 = checkSum(input);
	const result2 = correctBoxes(input);

	console.log('2.1', result1);
	console.log('2.2', result2);
});
