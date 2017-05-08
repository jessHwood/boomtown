console.log("submit.js is working!");

$(document).ready(function() {
$('#surveySubmit').submit(function(event){

	event.preventDefault();

	console.log('is submit working');
	var name = $('#usr').val();
	console.log(name);
	var email = $('#InputEmail').val();
	console.log(email);
	var shopName = $('#shp').val();
	console.log(shopName);

	var newOwner = {
		name: name,
		shopName: shopName, 
		email: email
	};

	// var ownerString = JSON.stringify(newOwner);
	// console.log("newOwner" + ownerString);

	$.post("/api/owners", newOwner); 

	// $.ajax({
	// 	method:'POST',
	// 	url: '/api/owners',
	// 	data: {"name": "Jess"},
	// 	success: function(){
	// 		console.log("success");
	// 	}
	// });
});

});



 
