//Connect
var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://ntutchton@localhost:5432/boomtown');

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var Owner = sequelize.import('./owner');
var Result = sequelize.import('./result');

Result.belongsTo(Owner);
Owner.hasMany(Result);

module.exports.models = {
	Owner : Owner,
	Result : Result
};
