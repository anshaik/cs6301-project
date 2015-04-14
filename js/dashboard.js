//Login 
function get_purchase_history($email){
	//Ajax call to query to Login
	return $.ajax({
		url: "php/dashboard.php",
		dataType: "text",
		type: "POST",
		data: {
			email : email
		}
	});
}

$("document").ready(function(){
	//Check if already Logged in
 	if(localStorage['loggedin'] == 'yes'){
 		email = localStorage['email'];
		/* needs session variable */
		password = "";
		//Login
		get_purchase_history(email).done(function(r){
			console.log(r);
			if(r){
				$('#purchase_history table').append(r);
			} else {
				$('#purchase_history table').hide();
				printCritical("You haven't made any purchases yet!",'');
			}
		});
	}
	
});
