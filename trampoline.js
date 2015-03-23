function repeat(operation, num) {
	function repeat_r(operation, num) {
		if (num <= 0) return;
		operation();
		return repeat_r.bind(null, operation, num - 1); 
	}
	return trampoline(repeat_r.bind(null, operation, num));
}

function trampoline(fn) {
	while(fn && fn instanceof Function){
		fn = fn.apply(fn.context, fn.args);
	}
	return fn;
}

module.exports = function(operation, num) {
	// You probably want to call your trampoline here!
	return repeat(operation, num);
}
