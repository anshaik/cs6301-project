//Login 
function get_purchase_history($email,$password){
	//Ajax call to query to Login
	return $.ajax({
		url: "php/dashboard.php",
		dataType: "text",
		type: "POST",
		data: {
			email : email,
			password : password
		}
	});
}
//Output the dropdownbar for the Signed in Users
function displaySignedIn(){
	email = localStorage["email"];
	dropDownMeta = "<button class=\"btn btn-success dropdown-toggle\" type=\"\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"false\">";
	dropDownTitle = email;
	dropDownEndMeta = "<span class=\"caret\"></span></button>";
	dropDownMenu = "<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">";
	dropDownItem1 = "<li role=\"presentation\"><a id=\"changepassword\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">Change Password</a></li>";
	dropDownItem2 = "<li role=\"presentation\"><a id=\"signedindropdown\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">Sign Out</a></li>";
	dropDownEndMenu = "</ul>";
	signedInDropDown = "<div class=\"dropdown\">"+dropDownMeta+dropDownTitle+dropDownEndMeta+dropDownMenu+dropDownItem1+dropDownItem2+dropDownEndMenu+"</div>"; 
	$("#navbar-signedin").append(signedInDropDown);
}

$("document").ready(function(){
	//Hide the Signedout navbar when logged in
	if(localStorage["loggedin"] == 'yes'){
		$("#dashboardButton").show();
		$("#registerButton").hide();
		$("#navbar-signedout").hide();
		displaySignedIn();
		
	} else {
		$("#adminButton").hide();
		$("#dashboardButton").hide();
		$("#registerButton").show();
		$("#navbar-signedin").empty();
		$("#navbar-signedout").show();
	}
	
	if(localStorage["adminloggedin"] == 'yes'){
		$("#adminButton").show();
	}
	else {
		$("#adminButton").hide();
	}

	//Cleanup
	clearErrors();
	
	//Check if already Logged in
	if(localStorage['loggedin'] == 'yes'){
		email = localStorage['email'];
		/* needs session variable */
		password = "";
		//Login
		get_purchase_history(email,password).done(function(r){
			$('#purchase_history table').append(r);
		});
	
	}
});

