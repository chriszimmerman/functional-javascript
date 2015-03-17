function logger(namespace) {
	return function foo(){
		var args = [namespace];
		for(var i = 0; i < foo.arguments.length; i++){
			args.push(foo.arguments[i]);
		}
		console.log.apply(null, args);
	};
}

module.exports = logger
