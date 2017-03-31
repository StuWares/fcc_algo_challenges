// coded by Stu Wares, twitter.com/TeamRocketGB

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

/* TODO split the string by spaces, iterate across the array, checking length
making a new array of numbers (length values), arrange sting numerically
.pop off the end and return*/

function findLongestWord(str) {
	var arrayedWords = [];
	var wordLengths = [];

	arrayedWords = str.split(" ");

	wordLengths = arrayedWords.map(function (val)) {
		return val.length;
	});

	wordLengths = wordLengths.sort(function(a, b) {
		return a - b;
	});



  return wordLengths.pop();
}

findLongestWord("The quick brown fox jumped over the lazy dog");