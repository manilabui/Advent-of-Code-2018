//Advent of Code
//Day 4.1
const input = document.querySelector('h1').innerText.split(' ');

const sortInput = arr => {
	const cleanArr = [];

	while (arr.length) {
		const currArr = [];

		const currDate = arr[0].slice(-5).split('-').join('');
		const currTime = arr[1].slice(0,-1).split(':');
		
		currArr.push(currDate);
		currArr.push(currTime);
		currArr.push(arr[3]);

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

const hour = makeSchedule(60);


const createRecords = arr => {
	const records = [{
		guard: arr[0][2],
		schedule: hour.slice()
	}];
	let currGuardI = 0;

	while (arr.length) {
		let currObj = {
			guard: '',
			schedule: hour.slice()
		};

		const guardOrSleep = arr[0][2];

		if (guardOrSleep[0] === '#') {
			currObj.guard = guardOrSleep;
			
			for (let i = 0; i < records.length; i++) {
				const currGuardRecord = records[i];
				const finalRecordI = records.length - 1;
				
				if (currGuardRecord.guard === guardOrSleep) {
					currObj = currGuardRecord;
					currGuardI = i;
				}
				if (i === finalRecordI && records[finalRecordI].guard !== guardOrSleep) records.push(currObj);	
			}
		
			arr = arr.slice(1);
		}

		const currRecord = records[currGuardI];
		const minAsleep = parseInt(arr[0][1][1]);
		const minAwake = parseInt(arr[1][1][1]);
		
		for (let i = minAsleep; i < minAwake; i++) {
			currRecord.schedule[i]++;
		}

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

/*
Explanation: Part 1

Sorting Function
Line 3: Data pulled from h1 tag in HTML file.
Line 8: This loop runs as long as the array isn't empty.
Line 9: All of the info for one action is put into an array, so it can be sorted.
Line 11: Date is stored in the following format: 'mmdd'.
Line 12: Time is stored in the following array format: ['hh', 'mm'].
Line 16: This will always be the guard #, "up" or "asleep."
Line 18: We slice off more of the array if it's when the Guard's shift begins.
Line 24: Sort the final array. Everything will be in perfect order.
Line 27: Store the sorted array in a variable.

Schedule Function
Line 33: Loops to make an array of as many 0s as you put in the parameter.
Line 40: We store one with 60 0s in a variable (a 0 for every minute). 

Records Function
Line 45: Store the first guard in the records, because the next guard is pushed into the record through the loop if it is not found in the records. However, the loop doesn't run when empty.
Line 46: Have to slice. Otherwise, any changes would occur for all schedules.
Line 47: Need to know where in the records this guard is to pull the info without looping.
Line 49: Loop through the array as long as it's not empty.
Line 50: Have a default object that will be filled with info to put into the records.
Line 56: This variable will either have the guard number or the word "up"/"asleep".
Line 58: If the current entry is a guard number, we'll know because it starts with a '#'.
Line 59: So the guard number in the currObj is set to the guardOrSleep variable.
Line 60: Loop through the records to see if the guard is already there.
Line 66: If it is, pull the record into our currObj.
Line 67: And set the currGuardShift index so we know where to replace the old record with the new one.
Line 69: If the guard isn't found in the record, then push the currObj (which is a clean slate) into the records.
Line 72: Get rid of the line with guard number from the array.
Line 75: This variable is gives us the current record we need to change.
Line 76: The first item in the array has the time the guard falls asleep.
Line 77: The second item in the array is when the guard wakes up.
Line 79: Looping through the current guard's schedule to set when the guard was asleep.
Line 83: Remove the asleep and awake lines that we just recorded.
Line 89: Store the sleeping guard records in a variable.

Sleepiest Guard Function
Line 97: Loop through each guard in the records.
Line 100: Need to store the sleepiest min index of the current guard. Other guards could've slept more in any given minute, but they may not be the guard who slept the most overall.
Line 102: If the current num is higher than the one at the index of the current sleepiest minute, then put the new index.
Line 107: If the current sleep amount is bigger than the one set so far,
Line 108: Then set the new highest sleep amount,
Line 109: Set the new guardID,
Line 110: And set the sleepiest minute for that guard.
Line 114: Return the sleepiest guard ID * sleepiest minute per the problem spec.
*/

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

/*
Explanation: Part 2

Line 176: Loop through each guard in the records.
Line 180: Loop through the guard's schedule.
Line 181: If the current minute has a bigger number than everyone else,
Line 182: Set the sleepiest minute index to the current index,
Line 183: Set the sleepiest minute amount to the current amount,
Line 184: And set the sleepiest guard ID to the current ID.


PROBLEMS:

--- Day 4: Repose Record ---
You've sneaked into another supply closet - this time, it's across from the prototype suit manufacturing lab. You need to sneak inside and fix the issues with the suit, but there's a guard stationed outside the lab, so this is as close as you can safely get.

As you search the closet for anything that might help, you discover that you're not the first person to want to sneak in. Covering the walls, someone has spent an hour starting every midnight for the past few months secretly observing this guard post! They've been writing down the ID of the one guard on duty that night - the Elves seem to have decided that one guard was enough for the overnight shift - as well as when they fall asleep or wake up while at their post (your puzzle input).

For example, consider the following records, which have already been organized into chronological order:

[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up
Timestamps are written using year-month-day hour:minute format. The guard falling asleep or waking up is always the one whose shift most recently started. Because all asleep/awake times are during the midnight hour (00:00 - 00:59), only the minute portion (00 - 59) is relevant for those events.

Visually, these records show that the guards are asleep at these times:

Date   ID   Minute
            000000000011111111112222222222333333333344444444445555555555
            012345678901234567890123456789012345678901234567890123456789
11-01  #10  .....####################.....#########################.....
11-02  #99  ........................................##########..........
11-03  #10  ........................#####...............................
11-04  #99  ....................................##########..............
11-05  #99  .............................................##########.....
The columns are Date, which shows the month-day portion of the relevant day; ID, which shows the guard on duty that day; and Minute, which shows the minutes during which the guard was asleep within the midnight hour. (The Minute column's header shows the minute's ten's digit in the first row and the one's digit in the second row.) Awake is shown as ., and asleep is shown as #.

Note that guards count as asleep on the minute they fall asleep, and they count as awake on the minute they wake up. For example, because Guard #10 wakes up at 00:25 on 1518-11-01, minute 25 is marked as awake.

If you can figure out the guard most likely to be asleep at a specific time, you might be able to trick that guard into working tonight so you can have the best chance of sneaking in. You have two strategies for choosing the best guard/minute combination.

Strategy 1: Find the guard that has the most minutes asleep. What minute does that guard spend asleep the most?

In the example above, Guard #10 spent the most minutes asleep, a total of 50 minutes (20+25+5), while Guard #99 only slept for a total of 30 minutes (10+10+10). Guard #10 was asleep most during minute 24 (on two days, whereas any other minute the guard was asleep was only seen on one day).

While this example listed the entries in chronological order, your entries are in the order you found them. You'll need to organize them before they can be analyzed.

What is the ID of the guard you chose multiplied by the minute you chose? (In the above example, the answer would be 10 * 24 = 240.)

Your puzzle answer was 140932.

--- Part Two ---
Strategy 2: Of all guards, which guard is most frequently asleep on the same minute?

In the example above, Guard #99 spent minute 45 asleep more than any other guard or minute - three times in total. (In all other cases, any guard spent any minute asleep at most twice.)

What is the ID of the guard you chose multiplied by the minute you chose? (In the above example, the answer would be 99 * 45 = 4455.)

Your puzzle answer was 51232.
*/
