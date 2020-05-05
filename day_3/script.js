const fs = require('fs');

const cleanInput = arr => {
	const input = arr.map(line => {
  	const result = [];

  	const lineArr = line.split(' ').slice(2);
  	const firstElArr = lineArr[0].split(',');
  	const secondElArr = lineArr[1].split('x');
  	const firstNum = parseInt(firstElArr[0]);
  	const secondNum = parseInt(firstElArr[1].split(':')[0])

  	result.push(firstNum)
  	result.push(secondNum)
  	secondElArr.forEach(el => result.push(parseInt(el)))

  	return result; 
  })

  return input;
}

// part 1
// Function to make fabric, which is a square grid of 0s, with the input being the width/height of the grid
const makeFabric = inches => {
	const fabric = [];

	for (let i = 0; i < inches; i++) {
		const currRow = [];

		for (let j = 0; j < inches; j++) {
		currRow.push(0);
		}

		fabric.push(currRow);
	}

	return fabric;
}

const overlapNum = arr => {
	const fabric = makeFabric(1000);
	let result = 0;
	// Loop through each elf's spec.
	for (let i = 0; i < arr.length; i++) {
		const currElf = arr[i];
		const currColStart = currElf[0];
		const currRowStart = currElf[1];
		const currWidth = currElf[2];
		const currHeight = currElf[3];
		const lastRowI = currRowStart + currHeight - 1;
		const lastColI = currColStart + currWidth - 1;
		// Loop through each row the currElf's fabric is on.
		for (let j = currRowStart; j < lastRowI + 1; j++) {
			// Loop through the columns the currElf's fabric is on.
			for (let k = currColStart; k < lastColI + 1; k++) {
				// If the currPos is 1, there is an overlap, so we'll add one to the result
				// This ensures this square only gets counted once even if another elf overlaps on this same square bringing the num to 2+.
				if (fabric[j][k] === 1) result++;

				fabric[j][k]++;
			}
		}
	}

	return result;
}

// part 2
// Function to make fabric with elve's specs
const makeElfFabric = arr => {
	const fabric = makeFabric(1000);

	for (let i = 0; i < arr.length; i++) {
		const currElf = arr[i];
		const currColStart = currElf[0];
		const currRowStart = currElf[1];
		const currWidth = currElf[2];
		const currHeight = currElf[3];

		for (let j = currRowStart; j < currRowStart + currHeight; j++) {

			for (let k = currColStart; k < currColStart + currWidth; k++) {
				fabric[j][k]++;
			}
		}
	}

	return fabric;
}

const noOverlap = arr => {
	const elfFabric = makeElfFabric(arr);
	// Loop through each elf's spec.
	for (let i = 0; i < arr.length; i++) {
		const currElf = arr[i];
		const currColStart = currElf[0];
		const currRowStart = currElf[1];
		const currWidth = currElf[2];
		const currHeight = currElf[3];
		const lastRowI = currRowStart + currHeight - 1;
		const lastColI = currColStart + currWidth - 1;
		
		for (let j = currRowStart; j < lastRowI + 1; j++) {
			// Allows us to break out of current loop to move onto next elf claim.
			let breakSetter = 0;

			for (let k = currColStart; k < lastColI + 1; k++) {
				const currNum = elfFabric[j][k];
				// All numbers in the current fabric need to equal 1. If any don't, then it means it isn't the one.
				if (currNum !== 1) {
					// While we can easily break out of this loop with just a break, we need this breaksetter to break out of the next loop up as well, because the next round in the next loop would still be within the same elf claim.
					breakSetter++;
					break;
				} // If we have reached the last number in the current elf's claim, then it is the right one.
				if (j === lastRowI && k === lastColI) return i + 1;
			}

			if (breakSetter) break;
		}
	}

	return 0;
}

// execute
fs.readFile('day_3/input.txt', (err, data) => {
  const input = data.toString().split('\n');
  const finalInput = cleanInput(input);
  const result1 = overlapNum(finalInput);
  const result2 = noOverlap(finalInput);

  console.log('3.1', result1);
	console.log('3.2', result2);
});
