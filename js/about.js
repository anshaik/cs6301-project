//Clean the errors from the alert div
function clearErrors(){
	$(".alert-area").empty();
}
//Cleans up print success
function printSuccess($alert,$id_name){
	$(".alert-area").append("<div class=\"alert alert-success\" role=\"alert\">"+$id_name+" "+$alert+"</div>");
}

//Cleans up printing alert a billion times
function printCritical($alert,$id_name){
	$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+$id_name+" "+$alert+"</div>");
}

$("document").ready(function(){
	//The User has just Registered, and should have a success displaying said success
	if($.cookie("signupsuccess") == 'yes'){
		
		//Print Success
		printSuccess('User Registration Successful!','');
	
		//Clear out the cookie as there's no need to display the success anymore
		$.removeCookie("signupsuccess");
	}
	
	//If sign out is clicked, sign out
	$("#dropdownMenu1 #signedindropdown").click(function(){
		console.log("Signed out clicked");
		signOut();
	});
	
	
	//Hide the Signedout navbar when logged in
	if(localStorage["loggedin"] == 'yes'){
		$("#navbar-signedout").hide();
		displaySignedIn();
		
	} else {
		$("#navbar-signedin").empty();
		$("#navbar-signedout").show();
	}
});