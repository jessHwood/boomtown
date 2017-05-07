module.exports = function(sequelize, Sequelize){
	var model = sequelize.define('result', {
		//QUESTIONS FORMAT??
		question1: Sequelize.STRING,
		question2: Sequelize.STRING,
		question3: Sequelize.STRING,
		question4: Sequelize.STRING,
		question5: Sequelize.STRING,
		question6: Sequelize.STRING,
		question7: Sequelize.STRING,
	});
	return model;
};