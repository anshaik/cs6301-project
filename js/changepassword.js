
function changePassword($email,$password){
	//Ajax call to query to Change password
	return $.ajax({
		url: "php/changepassword.php",
		dataType: "text",
		type: "POST",
		data: {
			email : email,
			password : password
		}
	});
}

$("document").ready(function(){
	
	email = localStorage["email"];
	
	$("#navbar-signedin").on("click","#changepassword",function(){
		window.location.href='changepassword.html';
	});
	
	$("#changepasswordbutton").click(function(){
		password = $("#newpassword").val();
		repeatpassword = $("#repeatnewpassword").val()
		if(password !== repeatpassword){
			printCritical('New Password and Repeat New Password do not match!','');
		}
		else if(password.length < 6){
			printCritical('The password needs to be more than 6 characters!','');
		}
		else {
			changePassword(email,password).done(function(r){
				if(r === '1'){
					//Success
					printSuccess('Password Changed Successfully','');
				} else {
					//Nothing came back or Failure
					printCritical('Password was not able to be changed','');
				}
			});
		}
	});
	
});