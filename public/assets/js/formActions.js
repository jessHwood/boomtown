
$(document).ready(function(){
	//define actions on form submit
	$('#submitSurvey').on('click', function(){
		// var ownerInfo = {
		// 	name 	 : $('#usr').val(),
		// 	shopName : $('#shp').val(),
		// 	email 	 : $('#InputEmail').val()
		// };
		//console.log(ownerInfo);
		var surveyResults = {

		};

		// post the new user
		$.post("/api/owners", {
			name 	 : $('#usr').val(),
			shopName : $('#shp').val(),
			email 	 : $('#InputEmail').val()
		})
			.done(function(owner){
				//post the results using id resturned by user post
				$.post("/api/results" + owner.id, surveyResults);
			});
	 });
});