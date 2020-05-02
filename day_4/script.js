//Advent of Code
//Day 4.1
const input = document.querySelector('h1').innerText.split(' ');
console.log(input)
const sortInput = arr => {
	const cleanArr = [];

	while (arr.length) {
		// All of the info for one action is put into an array, so it can be sorted.
		const currArr = [];
		// Date is stored in the following format: 'mmdd'.
		const currDate = arr[0].slice(-5).split('-').join('');
		// Time is stored in the following array format: ['hh', 'mm'].
		const currTime = arr[1].slice(0,-1).split(':');
		
		currArr.push(currDate);
		currArr.push(currTime);
		// This will always be the guard #, "up" or "asleep."
		currArr.push(arr[3]);
		// We slice off more of the array if it's when the Guard's shift begins.
		if (arr[2] === 'Guard') arr = arr.slice(6);
		else arr = arr.slice(4);

		cleanArr.push(currArr);
	}

	return cleanArr.sort();
}

const sortedInput = sortInput(input);


const makeSchedule = num => {
	const scheduleArr = [];

	for (let i = 0; i < num; i++) {
		scheduleArr.push(0);
	}

	return scheduleArr;
}
// We store one with 60 0s in a variable (a 0 for every minute). 
const hour = makeSchedule(60);


const createRecords = arr => {
	// Store the first guard in the records, because the next guard is pushed into the record through the loop if it is not found in the records. However, the loop doesn't run when empty.
	const records = [{
		guard: arr[0][2],
		// Have to slice. Otherwise, any changes would occur for all schedules.
		schedule: hour.slice()
	}]; // Need to know where in the records this guard is to pull the info without looping.
	let currGuardI = 0;

	while (arr.length) {
		// Default object that will be filled with info to put into the records.
		let currObj = {
			guard: '',
			schedule: hour.slice()
		};
		// This variable will either have the guard number or the word "up"/"asleep".
		const guardOrSleep = arr[0][2];
		// If the current entry is a guard number, we'll know because it starts with a '#'.
		if (guardOrSleep[0] === '#') {
			currObj.guard = guardOrSleep;
			// Loop through the records to see if the guard is already there.
			for (let i = 0; i < records.length; i++) {
				const currGuardRecord = records[i];
				const finalRecordI = records.length - 1;
				
				if (currGuardRecord.guard === guardOrSleep) {
					currObj = currGuardRecord;
					// Set the currGuardShift index so we know where to replace the old record with the new one.
					currGuardI = i;
				}
				if (i === finalRecordI && records[finalRecordI].guard !== guardOrSleep) records.push(currObj);	
			}
			// Get rid of the line with guard number from the array.
			arr = arr.slice(1);
		}

		const currRecord = records[currGuardI];
		const minAsleep = parseInt(arr[0][1][1]);
		const minAwake = parseInt(arr[1][1][1]);
		// Loop through the current guard's schedule to set when the guard was asleep.
		for (let i = minAsleep; i < minAwake; i++) {
			currRecord.schedule[i]++;
		}
		// Remove the asleep and awake lines that we just recorded.
		arr = arr.slice(2);
	}

	return records;
}

const records = createRecords(sortedInput);


const sleepiestGuardWithTime = arr => {
	let mostSleep = 0;
	let sleepiestMinI = 0;
	let sleepiestGuardID = '';

	arr.forEach(guard => {
		const currGuard = guard.guard;
		const currGuardSchedule = guard.schedule;

		let currSleepiestMinI = 0;
		// If the current num is higher than the one at the index of the current sleepiest minute, then put the new index.
		let currSleepAmount = currGuardSchedule.reduce((acc, num, i) => {
			if (currGuardSchedule[currSleepiestMinI] < num) currSleepiestMinI = i;
			return acc + num;
		}, 0);

		if (currSleepAmount > mostSleep) {
			mostSleep = currSleepAmount;
			sleepiestGuardID = currGuard;
			sleepiestMinI = currSleepiestMinI;
		}
	})

	return parseInt(sleepiestGuardID.slice(1)) * sleepiestMinI;
}

let result1 = sleepiestGuardWithTime(records);
console.log(result1);

//Day 4.2
const sleepiestTimeWithGuard = arr => {
	let sleepiestMinI = 0;
	let sleepiestMinAmt = 0;
	let sleepiestGuardID = '';

	arr.forEach(guard => {
		const currGuard = guard.guard;
		const currGuardSchedule = guard.schedule;

		currGuardSchedule.forEach((min, i) => {
			if (min > sleepiestMin) {
				sleepiestMinI = i;
				sleepiestMinAmt = min;
				sleepiestGuardID = currGuard;
			}
		})
	})

	return parseInt(sleepiestGuardID.slice(1)) * sleepiestMinI;
}

let result2 = sleepiestTimeWithGuard(records);
console.log(result2);