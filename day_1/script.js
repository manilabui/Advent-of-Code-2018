const fs = require('fs');

// part 1
// Copied and pasted input into console for answer.

//part 2
fs.readFile('day_1/input.txt', (err, data) => {
	const input = data.toString().split('\n');

	const firstFrequencyRepeat = arr => {
		let start = 0;
		const frequencyArr = [];
		// Loop through input and add new values to frequencyArr.
		for (let i = 0; i < arr.length; i++) {
			let currNum = arr[i];
			let currFrequency = start + currNum;
			// If currFrequency is in the frequencyArr, we have our answer.
			if (frequencyArr.indexOf(currFrequency) !== -1) return currFrequency;
			// If last num in array is reached with no match, reset loop to start from beginning.
			if (i === arr.length - 1) i = -1;
			
			frequencyArr.push(currFrequency);
			start = currFrequency;
		}
	}

	const result = firstFrequencyRepeat(input);

  console.log('1.2', result);
});
