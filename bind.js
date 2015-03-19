module.exports = function(namespace) {
	var foo = function(){
		console.log.bind(undefined, namespace);
	};
	return foo;
}
