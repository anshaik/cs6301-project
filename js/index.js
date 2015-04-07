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

//Login 
function login($email,$password){
	//Ajax call to query to Login
	return $.ajax({
		url: "php/signin.php",
		dataType: "text",
		type: "POST",
		data: {
			email : email,
			password : password
		}
	});
}


$("document").ready(function(){
	
	//The User has just Registered, and should have a success displaying said success
	if(localStorage['signupsuccess'] == 'yes'){
		
		//Print Success
		printSuccess('User Registration Successful!','');
	
		//Clear out the cookie as there's no need to display the success anymore
		$.removeCookie("signupsuccess");
	}
	
	//Search Button Clicked
	$("#search").click(function(){
		//Debug check
		console.log("Search has been pushed");
	});
	
	//Sign Up Button Clicked
	$("#signinbutton").click(function(){
		
		//Cleanup
		clearErrors();
		
		//Check if already Logged in
		if(localStorage['loggedin'] == 'yes'){
			printCritical('Your already logged in!','');
		}else {
			//Get Email and Password
			email = $("#email").val();
			password = $("#password").val();

			//Login
			login(email,password).done(function(r){
				if(r == 1){
					//Success, Set Session variables
					printSuccess('Login Successful!','');
					localStorage['loggedin'] = "yes";
					localStorage['email'] = email;
				} 
				else {
					//Fail, print failure
					printCritical('Username or password is incorrect','');
				}
			});
		
		}
	});
	
});