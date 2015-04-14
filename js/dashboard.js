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
<<<<<<< HEAD

$("document").ready(function(){
=======
$("document").ready(function(){

	//Check if already Logged in
	if(localStorage['loggedin'] == 'yes'){
		email = localStorage['email'];

		get_purchase_history(email).done(function(r){
			$('#purchase_history table').append(r);
		});
>>>>>>> 4763f62f104b35f1dad48dc2e904d23015b56082
	
});
