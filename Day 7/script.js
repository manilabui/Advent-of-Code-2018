// Advent of Code
// Day 7.1
const input = document.querySelector('h1').innerText.split('Step ');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const organizeInput = arr => {
	const result = [];

	for (let i = 1; i < arr.length; i++) {
		const currElem = arr[i];
		const currArr = [];

		for (let j = 0; j < currElem.length; j++) {
			const currChar = currElem[j];

			if (alphabet.indexOf(currChar) !== -1) currArr.push(currChar);
			if (currArr.length === 2) {
				result.push(currArr);
				break;
			} 
		}
	}

	return result.sort();
}

const cleanInput = organizeInput(input);

// const alphabet = 'ABCDEF';
// const cleanInput = [['C','A'],['C','F'],['A','B'],['A','D'],['B','E'],['D','E'],['F','E']];

const createStart = arr => {
	const arranged = [];
	// loop through alphabet
	for (let i = 0; i < alphabet.length; i++) {
		const currLetter = alphabet[i];
		// loop through the after column in the array
		for (let j = 0; j < arr.length; j++) {
			const currAfterLetter = arr[j][1];
			// if the currLetter isn't in the after column, then, it's the first in the arranged array.
			if (currLetter === currAfterLetter) break;
			if (j === arr.length - 1) {
				arranged.push(currLetter);
			}
		}
	}

	return arranged;
}

const createSortSet = (arranged, input) => {
	const currSortSet = [];

	for (let i = 0; i < input.length; i++) {
		const currFirstColLetter = input[i][0];
		const currSecColLetter = input[i][1];
		// if the letter in the first column hasn't been arranged or the letter in the second column has been arranged, skip this input
		if (arranged.indexOf(currFirstColLetter) === -1 || arranged.indexOf(currSecColLetter) !== -1) continue;
		// if the letter in the first column has been arranged, then add it to the sort set
		if (arranged.indexOf(currFirstColLetter) !== -1) currSortSet.push(currSecColLetter);
	}

	return currSortSet.sort();
}

const createSortPairs = (sortSet, input) => {
	const currSortPairs = [];

	for (let i = 0; i < input.length; i++) {
		const currPair = input[i];
		const currSecondColLetter = currPair[1];

		if (sortSet.indexOf(currSecondColLetter) !== -1) currSortPairs.push(currPair);
	}

	return currSortPairs;
}

const arrangeLetters = arr => {
	const arranged = createStart(cleanInput);
	// loop continues until arranged is full, which is the length of the alphabet
	while (arranged.length < alphabet.length) {
		// loop through array to add all of the letters that are after what is currently in the arranged set
		const currSortSet = createSortSet(arranged, arr);
		const currSortPairs = createSortPairs(currSortSet, arr);

		for (let i = 0; i < currSortSet.length; i++) {
			const currSortSetLetter = currSortSet[i];
			//if all of the letters in front of the letter we're looking at are in the arranged, then it is our next letter
			for (let j = 0; j < currSortPairs.length; j++) {
				const currFirstColLetter = currSortPairs[j][0];
				const currSecColLetter = currSortPairs[j][1];

				if (currSecColLetter === currSortSetLetter && arranged.indexOf(currFirstColLetter) === -1) break;
				if (j === currSortPairs.length - 1) arranged.push(currSortSetLetter);
			}

			continue;
		}
	}

	return arranged.join('');
}

const result1 = arrangeLetters(cleanInput);
console.log(result1);

/*
1. loop through to find letters not in 2nd column.
2. loop through array to find the letters that all the arranged letters are before.
3. put them in order. this is the sort set.
4. loop through array to find all the pairings with those letters in the second column.
5. loop through the pairings starting with the first letter in the sort set.
6. the first letter that has all the letters in it's initial column in the arranged is next in the arranged.
7. if there is nothing that has all of it's letters in the initial columns in the arranged, then the previous set is added after that.
*/