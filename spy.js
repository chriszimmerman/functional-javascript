function Spy(target, method) {
	var numTimes = 0;	

	target.method = function(){
		numTimes++;
		return target.method();
	}

	this.count = function(){
		return numTimes;
	}
}

module.exports = Spy
