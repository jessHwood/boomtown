var db = require('../models');
var Owner = db.models.Owner;
var Result = db.models.Result;

//send all owners and info
function index(req, res){
	Owner.findAll()
		.then(function(owners){
			res.json(owners);
		});
}

//save a new owner
function create(req, res){
	console.log(req.body);
	Owner.create(req.body)
		.then(function(owner){
			if (!owner) return (res, "owner not saved");
			res.json(owner);
		});
}

//send one owner searched by shop name
function show(req, res) {
	Owner.findById(req.params.id, {
		include: Result
	})
		.then(function(owner){
			if(!owner) return (res, "owner not found");
			res.json(owner);
		});
}

//update an owner profile
function update(req, res){
	Owner.findById(req.params.id)
		.then(function(owner){
			if(!owner) return (res, "owner not found");
			return owner.updateAttributes(req.body);
		})
		.then(function(owner){
			res.json(owner);
		});
}

//delete an owner
function destroy(req, res){
	Owner.findById(req.params.id)
		.then(function(owner){
			if(!owner) return (res, "owner not found");
			return owner.destroy();
		})
		.then(function(){
			res.redirect("/");
		});
}

function getByName(req, res){
	Owner.findAll({
		where: {
			name : {
				$like : '%' + req.params.name + '%'
			}
		}
	})
	.then(function(owner){
		if(!owner) return (res, "owner not found");
		res.json(owner);
	});
}

function getByShop(req, res){
	Owner.findAll({
		where: {
			shopName : {
				$like : '%' + req.params.shopName + '%'
			}
		}
	})
	.then(function(owner){
		if(!owner) return (res, "owner not found");
		res.json(owner);
	});
}

function getByEmail(req, res){
	Owner.findAll({
		where: {
			email : {
				$like : '%' + req.params.email + '%'
			}
		}
	})
	.then(function(owner){
		if(!owner) return (res, "owner not found");
		res.json(owner);
	});
}


module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
module.exports.getByName = getByName;
module.exports.getByShop = getByShop;
module.exports.getByEmail = getByEmail;
