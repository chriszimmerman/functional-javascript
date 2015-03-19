function Spy(target, method) {
	var originalFunction = target[method];

	var spy = {
		count: 0
	};

	target[method] = function(){
		spy.count++;
		return originalFunction.apply(this, arguments);
	}	

	return spy;
}

module.exports = Spy
