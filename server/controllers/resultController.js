var db = require('../models');
var Result = db.models.Result;
var Owner = db.models.Owner;

function index(req, res){
	Result.findAll()
		.then(function(results){
			res.json(results);
		});
}

function create(req, res){
	Result.create(req.body)
		.then(function(result){
			if (!result) return (res, "result not saved");
			Owner.findById(req.params.ownerId)
			.then(function(owner){
				if (!owner) return (res, "owner not found");
				result.updateAttributes({
					ownerId : owner.id
				})
				.then(function(result){
					res.json(result);
				});
			});
		});
}

function show(req, res){
	Result.findById(req.params.id)
		.then(function(result){
			if(!result) return (res, "results not found");
			res.json(result);
		});
}

function update(req, res){
	Result.findById(req.params.id)
		.then(function(result){
			if (!result) return (res, "result not found");
			return result.updateAttributes(req.body);
		})
		.then(function(result){
			res.json(result);
		});
}

function destroy(req, res){
	Result.findById(req.params.id)
		.then(function(result){
			if(!result) return (res, "result not found");
			return result.destroy();
		})
		.then(function(){
			res.redirect('/');
		});
}	

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;