function loadUsers(userIds, load, done) {
	var users = [];
	var numberOfUsersCompleted = 0;
	
	userIds.forEach(function(id, index){
		load(id, function(user){
			users[index] = user;
			if(++numberOfUsersCompleted === userIds.length){
				return done(users);
			}
		});
	});
}

module.exports = loadUsers;
