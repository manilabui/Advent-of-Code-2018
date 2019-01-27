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
