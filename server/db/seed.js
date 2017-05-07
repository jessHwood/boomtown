var DB = require("../models").models;


var ownerCreate = function(){
	return DB.Owner.create({
		name: 'Kathy',
		shopName: 'HipsterBooks',
		email: 'kathy@hipsterbooks.com',
	});
};

var resultCreate = function(ownerId){
	return DB.Result.create({
		question1: 'female',
		question2: 'lorem',
		question3: "Chtulhu R'lyeh f'taguhn",
		question4: "Sunday",
		question5: "4,000",
		question6: "Sci-fi and fanstasy",
		question7: "The King in the North",
		ownerId : ownerId
	});
};

ownerCreate()
	.then(function(owner){
		resultCreate(owner.id)
			.then(function(){
				process.exit();
			});
	});