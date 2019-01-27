//Advent of Code
//Day 1.1
//copied and pasted input into console

//Day 1.2
/*
Put input into array:
1. Put input inside h1 tag in html file.
2. This code in js file to make it an array: 
	const input = document.querySelector('h1').innerText.split(' ');
3. Js function to convert the string output into numbers:
	const convertStringToNum = arr => {
		const result = [];

		for (let i = 0; i < arr.length; i++) {
			currNum = parseInt(arr[i]);
			result.push(currNum);		
		}

		return result;
	}
4. Minified the code.
*/
const firstFrequencyRepeat = arr => {
	let start = 0;
	const frequencyArr = [];
	//loop through input and add new values to frequencyArr
	for (let i = 0; i < arr.length; i++) {
		let currNum = arr[i];
		let currFrequency = start + currNum;
		//if currFrequency is in the frequencyArr, we have our answer
		if (frequencyArr.indexOf(currFrequency) !== -1) return currFrequency;
		if (i === arr.length - 1) i = -1;
		//^if we reach the last number in the array with no match, reset the loop to start at the beginning
		frequencyArr.push(currFrequency);
		start = currFrequency;
	}
}

const result = firstFrequencyRepeat(input);
console.log(result);

const input = [15,-14,-9,-15,5,-1,-6,5,-19,-11,13,-20,-5,-19,-16,-5,-5,-7,16,3,7,16,2,5,10,13,-4,-17,4,-8,-18,16,-14,3,12,8,15,15,-8,-6,9,2,16,19,18,-6,13,7,-12,-11,19,-20,-15,-19,-10,19,3,6,15,-1,-5,3,-1,14,17,-4,18,19,6,-13,12,2,7,-5,3,-17,15,8,18,-19,11,-8,5,-17,7,7,17,-13,-7,10,-6,19,-12,20,-19,-10,17,-14,-8,-13,-2,-15,-11,-6,3,12,14,6,9,20,21,16,-14,1,3,8,3,-18,-5,14,-3,7,17,-1,-1,-4,13,5,11,15,5,14,-12,5,-13,-19,-8,-18,16,12,13,18,10,18,-8,-8,17,-12,4,-14,6,17,14,-1,7,7,4,-8,10,-12,14,6,6,-1,-6,-3,12,12,-8,-17,-4,-4,-9,-3,-1,-11,14,6,-2,16,-9,-12,-8,-1,-2,5,19,15,-1,18,8,14,14,-19,-14,-5,-18,12,4,-6,-2,1,-8,-9,5,9,23,6,10,18,-13,19,-7,11,-1,17,18,16,15,12,16,-8,-4,19,11,-19,-12,15,3,-1,-1,-13,-13,-11,13,-19,15,16,7,-17,4,-2,-15,10,4,19,-15,-16,-17,5,-12,16,-17,-18,7,-14,-2,-10,-8,16,13,18,-9,2,-15,8,6,-3,-15,-16,9,10,-5,-10,19,-16,18,-19,-9,-15,-20,13,15,-13,-7,13,-2,18,-21,6,3,-7,-15,2,19,-13,15,-19,-14,-13,1,7,26,-13,-19,7,8,1,8,-15,3,-44,-15,-15,10,-11,9,-2,-5,-15,3,-10,-2,-14,-10,-1,4,-6,-10,-15,8,15,11,-18,13,17,2,11,7,6,-14,-15,-10,-13,-6,-18,-1,-10,-17,-18,-2,8,4,5,-6,-8,11,1,-20,28,-10,-4,17,3,4,-14,21,2,4,16,8,17,-22,-11,10,9,18,-15,16,13,-2,31,-14,1,4,-8,-18,-17,15,10,-14,36,62,15,-7,18,21,19,14,6,-15,20,2,-9,8,20,4,-15,12,-15,16,-14,10,10,-2,-13,37,-19,2,4,16,19,7,18,1,-11,-13,-9,3,5,16,-20,16,10,9,10,-12,-14,19,-1,6,7,21,10,17,2,7,9,-1,4,-11,-5,-14,4,-17,2,-10,14,-2,6,16,11,5,32,18,-11,7,-6,-16,-20,6,-3,21,-5,21,16,5,-9,6,15,-19,11,-10,-17,26,-5,-9,-19,13,24,7,-5,8,-12,-13,19,15,-20,-4,-31,-7,-21,1,18,-12,3,16,17,66,30,21,-15,3,13,-4,2,23,-46,-1,-203,15,2,-22,2,-13,-2,-23,-16,-16,-8,21,9,2,3,2,11,-4,-13,3,19,-7,13,3,24,14,-21,9,-18,5,-50,-19,-36,-11,-22,-16,22,-17,-21,7,12,-14,55,-4,5,51,30,27,69,-23,4,-13,-34,-41,-31,15,-36,-169,14,-19,-214,16,-79870,16,-12,17,15,-6,-7,18,13,11,18,18,-9,19,11,-12,-3,18,-13,19,11,8,-4,9,10,-12,-20,-18,3,19,-3,11,12,3,-8,-11,-2,-12,-8,-21,-20,-12,-13,19,-14,15,17,-5,-17,13,-18,-18,-3,-2,6,-8,9,-4,-10,-15,-6,-5,3,-20,11,-20,2,-12,-3,7,-15,3,-13,-14,-6,-6,10,11,19,10,-17,-17,-11,-11,3,-13,15,20,10,-16,7,7,-4,-16,2,8,18,-1,3,15,15,-19,12,-5,-10,19,14,1,14,-24,-4,-19,-15,-13,-10,-18,-12,-6,-8,-17,-15,10,16,-18,12,-16,-9,-6,17,19,18,-5,4,13,-11,-17,8,19,10,-5,-2,-9,3,-2,-8,-19,-13,8,2,-14,-9,-14,-16,-1,-14,3,-8,-6,-18,-7,6,14,-6,-19,-18,3,-7,-1,-12,-12,1,15,19,-7,16,-10,-7,-12,7,-18,-12,-11,8,-12,-16,-15,-9,14,-19,-3,-1,-9,-14,7,14,15,11,8,-1,8,-18,-5,-1,-12,5,9,9,15,14,12,-1,-10,13,-18,19,-11,6,-7,-11,-4,-6,5,-14,-1,-20,-18,-16,-16,-3,-4,6,-4,1,-11,5,-10,21,6,11,-14,4,2,15,11,6,3,-10,13,-10,-19,-2,11,9,12,14,-9,1,-2,9,10,-7,18,14,-10,-14,5,11,-12,11,5,7,21,4,-14,3,-9,17,-16,20,-2,-6,10,6,12,-11,19,10,-13,5,12,-13,-2,-1,-16,-19,16,24,20,-5,-6,4,1,-8,-18,-13,-12,-29,-12,24,-35,13,-24,-18,-9,-7,17,-11,-17,-20,-4,-5,8,-13,-1,-7,-9,-11,8,-16,10,-15,12,-3,11,-13,-4,-10,1,4,-18,10,-13,-16,-7,-17,-4,-1,-24,3,3,-10,8,-9,6,-18,5,-11,-12,-16,2,-20,23,-7,19,14,-19,6,8,-1,17,2,-15,19,-3,14,18,7,10,-7,-6,14,-4,-1,80922];

/*
PROBLEMS

--- Day 1: Chronal Calibration ---
"We've detected some temporal anomalies," one of Santa's Elves at the Temporal Anomaly Research and Detection Instrument Station tells you. She sounded pretty worried when she called you down here. "At 500-year intervals into the past, someone has been changing Santa's history!"

"The good news is that the changes won't propagate to our time stream for another 25 days, and we have a device" - she attaches something to your wrist - "that will let you fix the changes with no such propagation delay. It's configured to send you 500 years further into the past every few days; that was the best we could do on such short notice."

"The bad news is that we are detecting roughly fifty anomalies throughout time; the device will indicate fixed anomalies with stars. The other bad news is that we only have one device and you're the best person for the job! Good lu--" She taps a button on the device and you suddenly feel like you're falling. To save Christmas, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

After feeling like you've been falling for a few minutes, you look at the device's tiny screen. "Error: Device must be calibrated before first use. Frequency drift detected. Cannot maintain destination lock." Below the message, the device shows a sequence of changes in frequency (your puzzle input). A value like +6 means the current frequency increases by 6; a value like -3 means the current frequency decreases by 3.

For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:

Current frequency  0, change of +1; resulting frequency  1.
Current frequency  1, change of -2; resulting frequency -1.
Current frequency -1, change of +3; resulting frequency  2.
Current frequency  2, change of +1; resulting frequency  3.
In this example, the resulting frequency is 3.

Here are other example situations:

+1, +1, +1 results in  3
+1, +1, -2 results in  0
-1, -2, -3 results in -6
Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?

Your puzzle answer was 582.

--- Part Two ---
You notice that the device repeats the same frequency change list over and over. To calibrate the device, you need to find the first frequency it reaches twice.

For example, using the same list of changes above, the device would loop as follows:

Current frequency  0, change of +1; resulting frequency  1.
Current frequency  1, change of -2; resulting frequency -1.
Current frequency -1, change of +3; resulting frequency  2.
Current frequency  2, change of +1; resulting frequency  3.
(At this point, the device continues from the start of the list.)
Current frequency  3, change of +1; resulting frequency  4.
Current frequency  4, change of -2; resulting frequency  2, which has already been seen.
In this example, the first frequency reached twice is 2. Note that your device might need to repeat its list of frequency changes many times before a duplicate frequency is found, and that duplicates might be found while in the middle of processing the list.

Here are other examples:

+1, -1 first reaches 0 twice.
+3, +3, +4, -2, -4 first reaches 10 twice.
-6, +3, +8, +5, -6 first reaches 5 twice.
+7, +7, -2, -7, -4 first reaches 14 twice.
What is the first frequency your device reaches twice?

Your puzzle answer was 488.
*/









