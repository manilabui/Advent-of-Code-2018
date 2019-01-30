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