function displaySignedIn(){
	email = localStorage["email"];
	dropDownMeta = "<button class=\"btn btn-success dropdown-toggle\" type=\"\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"false\">";
	dropDownTitle = email;
	dropDownEndMeta = "<span class=\"caret\"></span></button>";
	dropDownMenu = "<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">";
	dropDownItem1 = "<li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Account Details</a></li>";
	dropDownItem2 = "<li role=\"presentation\"><a id=\"signedindropdown\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">Sign Out</a></li>";
	dropDownEndMenu = "</ul>";
	signedInDropDown = "<div class=\"dropdown\">"+dropDownMeta+dropDownTitle+dropDownEndMeta+dropDownMenu+dropDownItem1+dropDownItem2+dropDownEndMenu+"</div>"; 
	$("#navbar-signedin").append(signedInDropDown);
}

