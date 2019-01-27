//Advent of Code
//Day 2.1
//put input into array like Day 1
const checksum = arr => {
	let doubleCount = 0;
	let tripleCount = 0;
	//loop through the array of strings
	for (let i = 0; i < arr.length; i++) {
		let currStr = arr[i];
		let currDoubleCount = 0;
		let currTripleCount = 0;
		//loop through the currStr until it's empty
		while (currStr.length) {
			const currChar = currStr[0];
			const numOfCurrChar = currStr.split(currChar).length - 1;
			//add to currDoubleCount & currTripleCount if applicable
			if (numOfCurrChar === 2) currDoubleCount++;
			if (numOfCurrChar === 3) currTripleCount++;
			//remove character we've already counted from currStr
			currStr = currStr.split(currChar).join('');
			//if the string is empty, we add 1 to our doubleCount and tripleCount if the current count is above 0
			if (!currStr.length) {
				if (currDoubleCount) doubleCount++;
				if (currTripleCount) tripleCount++;
			}
		}
	}
	
	return doubleCount * tripleCount;
}

const input = ["cnjxpritdzhubeseewfmqagkul","cwyxpgitdzhvbosyewfmqagkul","cnfxpritdzhebosywwfmqagkul","cnjxpritdzgvbosyawfiqagkul","cnkxpritdzhvbosyewfmgagkuh","gnjxprhtdzhebosyewfmqagkul","cnjxpriedzevbosyewfjqagkul","cnjxpritdzhpyosyewfsqagkul","cnjxprltdzhvbosyewfmhagkzl","cnjxfritdjhvbosyewfmiagkul","xnjxpritdzhvbosyewfmqagkgn","cnjxpritdzmvzosyewfhqagkul","cljxxritdzhvbosyewfmragkul","cnjxjritdzhvbovyewfmvagkul","cnjxprdtdzhpbosyewvmqagkul","cojxprdtdzhzbosyewfmqagkul","cnjxpritgzhvfgsyewfmqagkul","knjxprptdzhvbosyecfmqagkul","cnjxpritdzhvbvsyeyfmqagkuc","cnjxpritdzhvbosvewfmoagjul","cnjxpritdzhvbosyfwfmbagkjl","cnjxpjitazhvbosfewfmqagkul","cnjtpfitdzhvbosyewfmiagkul","ckjxpritdzhvbysyewfmqagoul","cnjxvritdzhvbfsyewfmqalkul","cnjipqitdzhvbosyewfeqagkul","cnjhpritdzhvbosyewymqjgkul","cnjxprrtdzhvbosyewfmlkgkul","cnjxnritdzhvbopyewfmqaskul","cxjxpritdzhvtosyewjmqagkul","cnjxpritdzhvbjsyewfrqagkwl","cnjxhritdzhubosyewfmqagvul","cnjxpritdzhvbosyyyfmeagkul","cnjxkritdzhvaoeyewfmqagkul","cnjxpritdzhvtotyewfmqazkul","cnjxoriadzhvbosyewfmqcgkul","cnjxpritdzhcbosyewfmkapkul","fnjxprtddzhvbosyewfmqagkul","cnjxmvitdzhvbosyewfmqagrul","cnjxpyitdzhibosyewfmqagktl","cyjxprxtdzhvbosyewbmqagkul","onjxpditdzhvbosyeofmqagkul","cnjxprixdzhvbosuewftqagkul","cnjxpritdrhvaosyewymqagkul","cnjxpritdzhhbokyewfvqagkul","cnjxpritczhvbosyewfmqwgxul","cnjxpribdzqvbnsyewfmqagkul","ynpxpritdzhvbvsyewfmqagkul","cnjxprirdzhvboerewfmqagkul","cnjxpritdxhvbosyewfmgavkul","cnwxprntdzhvbosyewfmqagkuk","cnjxpritzzhvbosyewfmcagktl","bbjxpritdzhvbosyetfmqagkul","cnjxpbitdzhvbosyewrmqagkui","cnjxwrildzcvbosyewfmqagkul","cnqxpoitdzhvbosnewfmqagkul","cnzxpritdzhvbosyewfmqazkfl","cnjxpriddzhvoosyewfmhagkul","znjxpritdzhvbosjewfmqagkur","cnjxpritdzhvbosyewcmfagkuk","cnjxpritdzhvbomyywnmqagkul","cnjxpgitjzhvbosyejfmqagkul","cnjxpkitdzjvbosyewfmqcgkul","cnjxpritduhvbosyewfmqfkkul","cnfxpritdzhvbgsyewfmqwgkul","cnjxpritdzhvbosywufmqaskul","cnjxprittzhvboryswfmqagkul","cndxpritpzrvbosyewfmqagkul","cnjxpritdzhvbosyewfwqazkum","cccxprmtdzhvbosyewfmqagkul","cnjxpzitdzhvlbsyewfmqagkul","cnjxdrigdzhvbosyewfmqagsul","fhjxpritdzhvbosyewfmqagkcl","cnjxpritdzhvdosyewffqagaul","cnjxprikdztvbosyekfmqagkul","cnjxpritdzhvbohiewfmqagkue","cnjxpritdzhvbowyetfmqegkul","cnuxpritdzhvbosyewmmqapkul","qnjxpritdzhvbosyewfmjakkul","cnjxpritdzlvbosyewiaqagkul","cnjxpritdzhpoosyewfmvagkul","cdjxpritdzhvboryewfbqagkul","cnjxppitxzhvbosyewymqagkul","cnjxpywtdzhvboiyewfmqagkul","cnjxpritdzpvbosyezfmqaqkul","cnjppritdghvbosyewfdqagkul","cmjxpritdzhvbosvewfmqagkup","cnjxoritdzhvbosylffmqagkul","cnjxfritdzhvbojyewfmqagkvl","cnjxpritdzhvbozyewgmqlgkul","cnjxlritdzhvbosyewfmqalkug","cnyxprittzhvbosyewfmsagkul","cnjxprytdzcvdosyewfmqagkul","ctjxpritdzhvbosyedfmqagkil","cnjxpvitdzhrbosyewfmqaekul","cnyxyritdzhvbospewfmqagkul","cnjxoritwzhvbosyewrmqhgkul","cnjxpritdzhjbosyqwsmqagkul","cnjzprindzhvbosyewfmqabkul","cnjspritdzhvbosysffmqagkul","cnxxpritdzhvbosyelfmqageul","bnjhpritdzhvbosyewfmzagkul","cnjxbhitdzhdbosyewfmqagkul","cnjxprktdzmvbosyewfmqagkuj","cnjxprixdzhvbqsyewfmqmgkul","cnjxpkitdzhvbosyewfmqagbum","cnjhpritdzhxbosyewfmqagjul","cnjxpritdzzvbosyewuqqagkul","cnjxprhtdzhvuopyewfmqagkul","cnjxpritdzhjqosyewfmqagkgl","cnzxpritdzhvbosyejfmuagkul","cnvxpritoohvbosyewfmqagkul","cnjxpmitdzwvbosyemfmqagkul","cnjoprittzzvbosyewfmqagkul","cnjxpgitdzhvbosytwfmqsgkul","cnjxprrtdehvbosyewfnqagkul","onjxpjitdzgvbosyewfmqagkul","cnjxpmitdzhvbopaewfmqagkul","cnjxpritqzhvbosoewfrqagkul","cnjxpnitdzhvbosyewfmqagkjy","cnsxpritdzhvbosyewfmqjykul","cnjxpriidzhvbosyewfmqxgkut","cnjxpyitdzhnbosyewfgqagkul","cnjxpritdzhbboyyewfmqagsul","cnjxpeitdzsvbosyewfmqabkul","cnjxpritdzhzvosyewfmragkul","cnjrpritdzhmbosyewfmqrgkul","cnjxpritdzhmbosyenfmqaglul","cnjxqrntdzhvboswewfmqagkul","cnjxprdtpzhvbosyewfmqagkcl","cnjxpritdzhvsdsyewfmqagkur","cnjxpritdzhvvosyewumqhgkul","cnzxpritdznvhosyewfmqagkul","ynjypritdzhvbosyewfmqagkuz","cnjxpnitdzhvbocyezfmqagkul","vnjxpritdzhvbfsyewfmjagkul","cnjfpritdzhvbosyewfmqagkzu","cnjxpritdzhbbosyewfmlegkul","cnjxpnitdzhvbosyesfmbagkul","cnjxpritezwvbosyewfmqagkgl","cujxpritdzhqbosyawfmqagkul","cnjxprindzhrbosyerfmqagkul","cntxpritdzhvbosyewfmqauxul","cnjxpvitdzhvbosyepfmqagkuy","cnjxdrqtdzhvbosdewfmqagkul","cnnxpritdzhvvosyenfmqagkul","lnjxphitdzhvbosyewfaqagkul","cngxpritdzhhbobyewfmqagkul","uncxphitdzhvbosyewfmqagkul","cnjxpribdehvbosfewfmqagkul","cnjxppitdqhvbmsyewfmqagkul","gnjxpritkzhvbosyewfbqagkul","znjxpritdzhvbowycwfmqagkul","cnjxpgitdzhvbosyewidqagkul","cnjxhritdzhvbowyswfmqagkul","injxkritdzhvbjsyewfmqagkul","cmjupritgzhvbosyewfmqagkul","cnjxpritdzbvjoeyewfmqagkul","cnjxpritdkhvbosyewlmuagkul","cnkxpritdzhebvsyewfmqagkul","cyjxptitdzhvbosyewfmqagkuv","cnjxpritdzhvbodrewflqagkul","cnjxpratdzhvbksyewfhqagkul","cnjxpoitdzhvbosjewxmqagkul","cnjxprhidzhvbasyewfmqagkul","cnjxpritdzhvbosqewvmqagmul","cnjxoritdzhvbosyzifmqagkul","mnjxpritdzhvbcsyeyfmqagkul","cnjhpritgzhvbosyewfmqngkul","cnjxprijdzevbesyewfmqagkul","cnexprqtdzhvbosyewvmqagkul","cnjxpxitdzhvbosyawfmqmgkul","cnjxpritdzhvbosyirfmqaxkul","cqjxpcitdzhvboslewfmqagkul","cmjxpqitdztvbosyewfmqagkul","cnbxpritdzhvfosyewfmuagkul","cnjxprrtdzhvbosumwfmqagkul","cnjxprttdvhvbossewfmqagkul","cnjxpritdzhvbcsuewfaqagkul","cbjxpritdzhvbosyewfhqalkul","cnjxprithzhvbosjcwfmqagkul","chjxpritdzhvbosyewftcagkul","cnjxprirdchvdosyewfmqagkul","cnjxpritdxhvbosyewfmqcgkal","cnjxpriidchvbosrewfmqagkul","cnjhprizdzhvbosyewfmqagvul","cnjwpritdzhpbosyewfmqaqkul","cnjxpgitfzhvbosyxwfmqagkul","cnjxpjiedzhvbosywwfmqagkul","cnjxpritdzhvbosyewfpqynkul","xnixlritdzhvbosyewfmqagkul","cnjxoritdznvbosyehfmqagkul","cnjxpritdzhvbjsyewsmqagcul","lnjxpritdzhvkosyewjmqagkul","cnjxpritdzhvbosyedfiqvgkul","cnjxpritdzhqbdsyerfmqagkul","cnjxpritdzavbosyywfmqagvul","dmjxprithzhvbosyewfmqagkul","cnjxpriqdzhvnosyeofmqagkul","cnjxpritdxhvboszewfmqkgkul","cnjxpritdzxvbosjewymqagkul","cnjxpritdzngbosyewfmqugkul","cajxpritdnhvbosyerfmqagkul","cnsxpritdzhvbosymwfmqagcul","cnjxoritdzhvbosyewrmqhgkul","cnjxpritdzhvposyewfmqagkwo","cnjxpriazzhvbosyeufmqagkul","cnjxrritdzhvbosymhfmqagkul","cnjxprztdzhvbosyewfmqtgkum","cnjxpritdzhvbmsyewfmqatkun","cnuxpritdzhvbosyewfmqagvur","ctjxxritdzhvbosyewfvqagkul","cnjxpritdzlvbosyevfmqagkll","cnjxpritdzhlbosyewfmqagasl","cnjxpritwzhvbosyewfcxagkul","cyjxpritdzhfbosyewfmqagcul","cnjxpritxghvkosyewfmqagkul","ctjxpritdjhvbosyewfmqkgkul","cnjxpritxzhvbosyewjmbagkul","unjxpritdzhkbosyewfmqaghul","cnjoprqtdzhvbosyewzmqagkul","rnjxprgtgzhvbosyewfmqagkul","cnjgpqitdzhvbosyewfaqagkul","cnjxpritdzuybosyewfmqagful","cnjxprqtdahvbosyewfnqagkul","cnjxpritdzhmkhsyewfmqagkul","wnjxpritdzhvbosiewfmqagkml","cnjmpritdzhvbosyjwfmqagkdl","cnjopritdzhvbksyewfmqrgkul","cnlxpritdzhvbosyewfmomgkul","cgjxpritdzhvbbsyewfmxagkul","cnaxpritdvhvnosyewfmqagkul","cnjxprijdzhvbkmyewfmqagkul","cnjxpritdzhvposyewzmqagkuz","cnuxpuitdzdvbosyewfmqagkul","cnjxprifdzjvbosyewfyqagkul","cnhspritdzhvbosyewfmqaghul","cnjxprcbdzfvbosyewfmqagkul","lnjapritdzhvbosyewfmqegkul","cnjxprisszhvbosyewqmqagkul","cnjxpritdzhvbosyeifmsagoul","cnjxpritrfhvbosyewfmqagkuz","cnjxkritdzmvboqyewfmqagkul","cnjxpritdzhvbosyedfmqzgkzl","cnjxprifdzhvbosyswfmqagksl","cnjxoritdzhvbosyxwfmhagkul","cnjhpritdzzvbosfewfmqagkul","cnjxprityjhvbomyewfmqagkul","cnjbpritdzhvbosyywfmqagkuf","cnjxprrtdzhvbosyewgmqagtul"];

const result1 = checksum(input);
console.log(result1);


//Day 2.2
const correctBoxes = arr => {
	//loops run as long as there are 2+ strings to compare
	while(arr.length > 1) {
		//loop through array of strings for the second string to compare, so index starts at 1.
		for (let i = 1; i < arr.length; i++) {
			const firstStr = arr[0];
			const secondStr = arr[i];
			let currMatch = [];
			//loop through the characters of first and second strings simultaneously
			for (let j = 0; j < firstStr.length; j++) {
				const currFirstChar = firstStr[j];
				const currSecondChar = secondStr[j];
				//add character at currPos if they match & break out of loop as soon as more than one set doesn't match
				if (currFirstChar === currSecondChar) currMatch.push(currFirstChar);
				if (j > currMatch.length) break;
				if (j === firstStr.length - 1) return currMatch.join('');
				//^if end of string is reached, then it's the answer
			}
		}
		//remove first string from array one it has been checked
		arr.shift();
	}	
}

const resultPart2 = correctBoxes(input);
console.log(resultPart2);

/*
PROBLEMS

--- Day 2: Inventory Management System ---
You stop falling through time, catch your breath, and check the screen on the device. "Destination reached. Current Year: 1518. Current Location: North Pole Utility Closet 83N10." You made it! Now, to find those anomalies.

Outside the utility closet, you hear footsteps and a voice. "...I'm not sure either. But now that so many people have chimneys, maybe he could sneak in that way?" Another voice responds, "Actually, we've been working on a new kind of suit that would let him fit through tight spaces like that. But, I heard that a few days ago, they lost the prototype fabric, the design plans, everything! Nobody on the team can even seem to remember important details of the project!"

"Wouldn't they have had enough fabric to fill several boxes in the warehouse? They'd be stored together, so the box IDs should be similar. Too bad it would take forever to search the warehouse for two similar box IDs..." They walk too far away to hear any more.

Late at night, you sneak to the warehouse - who knows what kinds of paradoxes you could cause if you were discovered - and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates (your puzzle input).

To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

For example, if you see the following box IDs:

abcdef contains no letters that appear exactly two or three times.
bababc contains two a and three b, so it counts for both.
abbcde contains two b, but no letter appears exactly three times.
abcccd contains three c, but no letter appears exactly two times.
aabcdd contains two a and two d, but it only counts once.
abcdee contains two e.
ababab contains three a and three b, but it only counts once.
Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.

What is the checksum for your list of box IDs?

Your puzzle answer was 7410.

--- Part Two ---
Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)

Your puzzle answer was cnjxoritzhvbosyewrmqhgkul.
*/