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
	
});

