//Advent of Code
//Day 6.1
const input = document.querySelector('h1').innerText.split(', ').join().split(' ');

const cleanInput = arr => {
	const cleanArr = [];

	arr.forEach(coord => {
		const currArr = coord.split(',');
		currArr[0] = parseInt(currArr[0]);
		currArr[1] = parseInt(currArr[1]);

		cleanArr.push(currArr);
	})

	return cleanArr;
}

const coordinates = cleanInput(input);


const makeGrid = (numOfRows, numOfCols) => {
	const grid = [];

	for (let i = 0; i < numOfRows; i++) {
		const currRow = [];

		for (let j = 0; j < numOfCols; j++) {
			currRow.push('.');	
			if (currRow.length === numOfCols) grid.push(currRow);
		}
	}

	return grid;
} 


const fillGrid = arr => {
	let smallestRowNum = arr[0][0];
	let biggestRowNum = arr[0][0];
	let smallestColNum = arr[0][1];
	let biggestColNum = arr[0][1];
	//loop through coords to find the biggest and smallest col and row nums
	for (let i = 1; i < arr.length; i++) {
		const x = arr[i][0];
		const y = arr[i][1];

		if (x < smallestRowNum) smallestRowNum = x;
		if (x > biggestRowNum) biggestRowNum = x;
		if (y < smallestColNum) smallestColNum = y;
		if (y > biggestColNum) biggestColNum = y;
	}
	//create empty grid
	const rowLength = biggestRowNum - smallestRowNum + 1;
	const colLength = biggestColNum - smallestColNum + 1;
	let grid = makeGrid(rowLength, colLength);
	//put the coords in the grid
	arr.forEach((coord, i) => {
		const currNum = i + 1;
		const x = coord[0] - smallestRowNum;
		const y = coord[1] - smallestColNum;

		grid[x][y] = currNum;
	})
	//create closest num grid
	for (let i = 0; i < grid.length; i++) {
		const currRow = grid[i];

		for (let j = 0; j < currRow.length; j++) {
			const currElem = currRow[j];

			if (currElem === '.') {
				let currClosestNum = [];
				let currClosestDist = grid.length + currRow.length;

				arr.forEach((coord, k) => {
					const currNum = k + 1;
					const x = coord[0] - smallestRowNum;
					const y = coord[1] - smallestColNum;
					let xDist = 0;
					let yDist = 0;

					if (i <= x) xDist = x - i;
					if (i > x) xDist = i - x;
					if (j <= y) yDist = y - j;
					if (j > y) yDist = j - y;
					
					const currTotalDist = xDist + yDist;

					if (currTotalDist === currClosestDist) currClosestNum.push(currNum);
					if (currTotalDist < currClosestDist) {
						currClosestNum = [currNum];
						currClosestDist = currTotalDist;
					}
				})

				if (currClosestNum.length > 1) continue;
				grid[i][j] = currClosestNum[0].toString();
			}
		}
	}

	return grid;
}

const closestNumGrid = fillGrid(coordinates);


const findLargestArea = (arr, coord) => {
	const rejected = [];

	for (let i = 0; i < arr.length; i++) {
		const currRow = arr[i];
		const currFirstColElem = currRow[0];
		const currLastColElem = currRow[currRow.length - 1];

		if (typeof currFirstColElem === 'string' && currFirstColElem !== '.') {
			if (!rejected.includes(currFirstColElem)) rejected.push(currFirstColElem);
		}
		if (typeof currLastColElem === 'string' && currLastColElem !== '.') {
			if (!rejected.includes(currLastColElem)) rejected.push(currLastColElem);
		}
		if (i === 0) {
			for (let j = 1; j < currRow.length - 1; j++) {
				const currFirstRowElem = currRow[j];
				const currLastRowElem =  arr[arr.length - 1][j];

				if (typeof currFirstRowElem === 'string' && currFirstRowElem !== '.') {
					if (!rejected.includes(currFirstRowElem)) rejected.push(currFirstRowElem);
				}
				if (typeof currLastRowElem === 'string' && currLastRowElem !== '.') {
					if (!rejected.includes(currLastRowElem)) rejected.push(currLastRowElem);
				}
			}
		}
	}

	let currLargestArea = 0;

	for (let i = 1; i < coord.length; i++) {
		const currNum = i.toString();
		let currNumCount = 0;

		if (rejected.includes(currNum)) continue;

		for (let j = 1; j < arr.length - 1; j++) {
			const currRow = arr[j];
			const currNumI = currRow.indexOf(currNum);

			if (currNumI !== -1) {
				for (let k = currNumI; k < currRow.length - 1; k++) {
					const currElem = currRow[k];
					
					if (currElem === currNum) currNumCount++;
				}
			}
		}

		if (currNumCount > currLargestArea) currLargestArea = currNumCount;
	}

	return currLargestArea + 1;
}

const largestArea = findLargestArea(closestNumGrid, coordinates);

/*
Explanation: Part 1
*/

//Day 6.2
const absValueRegion = (arr, num) => {
	let smallestRowNum = arr[0][0];
	let biggestRowNum = arr[0][0];
	let smallestColNum = arr[0][1];
	let biggestColNum = arr[0][1];
	//loop through coords to find the biggest and smallest col and row nums
	for (let i = 1; i < arr.length; i++) {
		const x = arr[i][0];
		const y = arr[i][1];

		if (x < smallestRowNum) smallestRowNum = x;
		if (x > biggestRowNum) biggestRowNum = x;
		if (y < smallestColNum) smallestColNum = y;
		if (y > biggestColNum) biggestColNum = y;
	}
	//create empty grid
	const rowLength = biggestRowNum - smallestRowNum + 1;
	const colLength = biggestColNum - smallestColNum + 1;
	let grid = makeGrid(rowLength, colLength);
	//put the coords in the grid
	arr.forEach((coord, i) => {
		const currNum = i + 1;
		const x = coord[0] - smallestRowNum;
		const y = coord[1] - smallestColNum;

		grid[x][y] = currNum;
	})

	let regionSize = 0;
	//create abs value grid
	for (let i = 0; i < grid.length; i++) {
		const currRow = grid[i];

		for (let j = 0; j < currRow.length; j++) {
			const currElem = currRow[j];
			let currTotalDist = 0;

			arr.forEach((coord, k) => {
				const currNum = k + 1;
				const x = coord[0] - smallestRowNum;
				const y = coord[1] - smallestColNum;
				let xDist = 0;
				let yDist = 0;

				if (i <= x) xDist = x - i;
				if (i > x) xDist = i - x;
				if (j <= y) yDist = y - j;
				if (j > y) yDist = j - y;
					
				const currDist = xDist + yDist;

				currTotalDist += currDist;
			})

			if (currTotalDist < num) regionSize++;
		}
	}

	return regionSize;
}

const absRegionSize = absValueRegion(coordinates, 10000);
console.log(absRegionSize);

/*
PROBLEMS:

--- Day 6: Chronal Coordinates ---
The device on your wrist beeps several times, and once again you feel like you're falling.

"Situation critical," the device announces. "Destination indeterminate. Chronal interference detected. Please specify new target coordinates."

The device then produces a list of coordinates (your puzzle input). Are they places it thinks are safe or dangerous? It recommends you check manual page 729. The Elves did not give you a manual.

If they're dangerous, maybe you can minimize the danger by finding the coordinate that gives the largest distance from the other points.

Using only the Manhattan distance, determine the area around each coordinate by counting the number of integer X,Y locations that are closest to that coordinate (and aren't tied in distance to any other coordinate).

Your goal is to find the size of the largest area that isn't infinite. For example, consider the following list of coordinates:

1, 1
1, 6
8, 3
3, 4
5, 5
8, 9
If we name these coordinates A through F, we can draw them on a grid, putting 0,0 at the top left:

..........
.A........
..........
........C.
...D......
.....E....
.B........
..........
..........
........F.
This view is partial - the actual grid extends infinitely in all directions. Using the Manhattan distance, each location's closest coordinate can be determined, shown here in lowercase:

aaaaa.cccc
aAaaa.cccc
aaaddecccc
aadddeccCc
..dDdeeccc
bb.deEeecc
bBb.eeee..
bbb.eeefff
bbb.eeffff
bbb.ffffFf
Locations shown as . are equally far from two or more coordinates, and so they don't count as being closest to any.

In this example, the areas of coordinates A, B, C, and F are infinite - while not shown here, their areas extend forever outside the visible grid. However, the areas of coordinates D and E are finite: D is closest to 9 locations, and E is closest to 17 (both including the coordinate's location itself). Therefore, in this example, the size of the largest area is 17.

What is the size of the largest area that isn't infinite?

Your puzzle answer was 2906.

--- Part Two ---
On the other hand, if the coordinates are safe, maybe the best you can do is try to find a region near as many coordinates as possible.

For example, suppose you want the sum of the Manhattan distance to all of the coordinates to be less than 32. For each location, add up the distances to all of the given coordinates; if the total of those distances is less than 32, that location is within the desired region. Using the same coordinates as above, the resulting region looks like this:

..........
.A........
..........
...###..C.
..#D###...
..###E#...
.B.###....
..........
..........
........F.
In particular, consider the highlighted location 4,3 located at the top middle of the region. Its calculation is as follows, where abs() is the absolute value function:

Distance to coordinate A: abs(4-1) + abs(3-1) =  5
Distance to coordinate B: abs(4-1) + abs(3-6) =  6
Distance to coordinate C: abs(4-8) + abs(3-3) =  4
Distance to coordinate D: abs(4-3) + abs(3-4) =  2
Distance to coordinate E: abs(4-5) + abs(3-5) =  3
Distance to coordinate F: abs(4-8) + abs(3-9) = 10
Total distance: 5 + 6 + 4 + 2 + 3 + 10 = 30
Because the total distance to all coordinates (30) is less than 32, the location is within the region.

This region, which also includes coordinates D and E, has a total size of 16.

Your actual region will need to be much larger than this example, though, instead including all locations with a total distance of less than 10000.

What is the size of the region containing all locations which have a total distance to all given coordinates of less than 10000?

Your puzzle answer was 50530.
*/