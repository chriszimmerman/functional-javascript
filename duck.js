function duckCount() {
	return Array.prototype.reduce.call(arguments, function(ducks, obj){
		if(Object.getPrototypeOf(obj) === Object.prototype && Object.prototype.hasOwnProperty.call(obj, 'quack')){
			return ducks + 1;
		}
		else{
			return ducks;
		}
	}, 0);
}

module.exports = duckCount
