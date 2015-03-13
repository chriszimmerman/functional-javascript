function countWords(inputWords) {
	return inputWords.reduce(function(dictionary, currentWord){
		if(dictionary[currentWord] === undefined){
			dictionary[currentWord] = 1;	
		}
		else{
			dictionary[currentWord]++;
		}
		return dictionary;
	}, {});
}

module.exports = countWords
