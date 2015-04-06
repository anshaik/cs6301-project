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
	$("#search").click(function(){
		//Debug check
		console.log("Search has been pushed");
	});
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
				} 
				else {
					//Fail, print failure
					printCritical('Username or password is incorrect','');
				}
			});
		
		}
		
	});
});