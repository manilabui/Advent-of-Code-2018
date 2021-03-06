const fs = require('fs');

// part 1
const unitsLeft = str => {
	// Loops to the string length - 1, because we're comparing the current character and the next one in each round.
	for (let i = 0; i < str.length - 1; i++) {
	 	const firstChar = str[i];
	 	const secondChar = str[i + 1];
	 	// Check if the characters match first before we check if they match with the case changes.
	 	if (firstChar === secondChar) continue;
	 	if (firstChar.toLowerCase() === secondChar || firstChar.toUpperCase() === secondChar) {
	 		// If so, then we remove the pair from the current string.
	 		str = str.slice(0, i) + str.slice (i + 2);
	 		// If it's at the beginning, then we need to make sure that i doesn't get smaller than 0.
	 		if (i === 0) i = -1;
	 		// Otherwise, we reduce i by 2, so that we can go back to the previous character to see if the characters before and after the pair we just removed match.
	 		else i -= 2;
	 	} // Don't need another statement for the case that the characters don't match at all.
	 }

	 return str.length;
}

// part 2
const improvedPolymer = (str, result) => {
	const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
	// Set the length at default of no letters being taken out.
	let shortestLength = result;
	
	for (let i = 0; i < 26; i += 2) {
	 	const currUpper = alphabet[i];
	 	const currLower = alphabet[i + 1];
	 	// Set a variable cutting the current letters out of the string.
	 	const cleanStr = str.split(currUpper).join('').split(currLower).join('');
	 	const currLength = unitsLeft(cleanStr);

	 	if (currLength < shortestLength) shortestLength = currLength;
	 }

	 return shortestLength;
}

// execute
fs.readFile('day_5/input.txt', (err, data) => {
	const input = data.toString();
  const result1 = unitsLeft(input);
  const result2 = improvedPolymer(input, result1);

  console.log('5.1', result1);
  console.log('5.2', result2)
});
