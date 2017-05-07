module.exports = function(sequelize, Sequelize){
	var model = sequelize.define('owner', {
		name: Sequelize.STRING,
		shopName: Sequelize.STRING,
		email: Sequelize.STRING
	});
	return model;
};