function repeat(operation, num) {
	var repeatRec = function(operation, num){
		if (num <= 0) return;
		operation();
		return repeat(operation, --num)
	}
	setInterval(repeatRec, 1500);
}

module.exports = repeat
