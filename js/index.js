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
function displaySignedIn(){
	email = localStorage["email"];
	dropDownMeta = "<button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\">";
	dropDownTitle = email;
	dropDownEndMeta = "<span class=\"caret\"></span></button>";
	dropDownMenu = "<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">";
	dropDownItem1 = "<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Account Details</a></li>";
	dropDownItem2 = "<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Sign Out</a></li>";
	dropDownEndMenu = "</ul>";
	signedInDropDown = "<div class=\"dropdown\">"+dropDownMeta+dropDownTitle+dropDownEndMeta+dropDownMenu+dropDownItem1+dropDownItem2+dropDownEndMenu+"</div>"; 
	$("#navbar-signedout").append(signedInDropDown);
}


$("document").ready(function(){
	
	//The User has just Registered, and should have a success displaying said success
	if($.cookie("signupsuccess") == 'yes'){
		
		//Print Success
		printSuccess('User Registration Successful!','');
	
		//Clear out the cookie as there's no need to display the success anymore
		$.removeCookie("signupsuccess");
	}
	
	//Hide the Signedout navbar when logged in
	if(localStorage["loggedin"] == 'yes'){
		$("#navbar-signedout").hide();
		displaySignIn();
		
	} else {
		$("#navbar-signedin").empty();
		$("#navbar-signedout").show();
	}
	
	//Search Button Clicked
	$("#search").click(function(){
		//Debug check
		console.log("Search has been pushed");
		
		//Check if all the data has been filled out
		
		//Extract the data
		
		//Make Ajax call to the Sabre API
		
		//Grab all the data from the JSON object
		
		//Switch Page?, Display the data, display buttons for booking
		
		
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
					localStorage["loggedin"] = 'yes';
					localStorage["email"] = email;
					$("#navbar-signedout").hide();
				} 
				else {
					//Fail, print failure
					printCritical('Username or password is incorrect','');
				}
			});
		
		}
	});
	
});