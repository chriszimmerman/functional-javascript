module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(acc, ele){
		return acc.concat(fn(ele));
	}, []);
}
