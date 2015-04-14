function createUser($email,$password,$firstname,$lastname){
	
	//Ajax call to create User
	return $.ajax({
		url: "php/signup.php",
		dataType: "text",
		type: "POST",
		data: {
			email : $('#Email').val(),
			password : $('#Password').val(),
			firstname : $("[id='First Name']").val(),
			lastname : $("[id='Last Name']").val(),
		}
	});
}
$("document").ready(function(){
	
	//Array of the various message for the printCriticals and printAlerts
	var message = {
				"empty" : "is empty!",
				"repeat" : "are not the same!",
				"invalidpassword" : "The password needs to be at least 6 characters!",
				"invalidemail" : "The email needs a @ symbol to be valid!",
				"emailexists" : "already exists!",
				"success" : "The User was successfully created!",
				"failure" : "The User failed to be created!"
	};
	
	//The User has just Registered, and should have a success displaying said success
	if($.cookie("signupsuccess") == 'yes'){
		
		//Print Success
		printSuccess('User Registration Successful!','');
	
		//Clear out the cookie as there's no need to display the success anymore
		$.removeCookie("signupsuccess");
	}
	
	//When the register button is clicked
	$("#register").click(function(){
		invalid_regristration = false;
		
		//Clean error message div's
		clearErrors();
		
		//Check if all boxes are non-empty
		$('.form-control col-lg-12').each(function(i, obj){
			
			//Get the name of the box
			id_name = $(this).attr("id");
			
			//Print Error, and set Registration to invalid
			if(!$(this).val()){
				printCritical(message["empty"],id_name);
				invalid_regristration = true;
			}
			//Break out of for each when one error is met
			if(invalid_regristration){
				return false;
			}
		});
		
		//Check if The Password and Repeat Password are equal
		if($('#Password').val() != $("[id='Repeat Password']").val()){
			printCritical(message["repeat"],'Password and Repeat Password');
			invalid_regristration = true;
		}
		//Check if the Email and Repeat Email are equal
		else if($('#Email').val() != $("[id='Repeat Email']").val()){
			printCritical(message["repeat"],'Email and Repeat Email');
			invalid_regristration = true;
		}
		//Check if Password is more than six characters
		else if($('#Password').val() && $('#Password').val().length < 6){
			printCritical(message["invalidpassword"],'');
			invalid_regristration = true;
		}
		//Check if Email is valid
		else if(!validEmailAddress($('#Email').val())){
			printCritical(message["invalidemail"],'');
			invalid_regristration = true;
		}
		
		//Query Database, Check if Email exists
		if(!invalid_regristration){
			
			//Get Email
			email = $('#Email').val();
			password = $('#Password').val();
			firstname = $("[id='First Name']").val();
			lastname = $("[id='Last Name']").val();
			
			
			emailExists(email).done(function(r){
				if(r == 1){
					//Post Error
					printCritical(message["emailexists"],email);
				} else {
					createUser(email,password,firstname,lastname).done(function(r){
						if(r == 1){
							//Successs
							$.cookie("signupsuccess","yes");
							window.location.href='index.html';
							
						} else {
							//Failure
							printCritical(message["failure"],'');
						}
					});
				}
			});
			
		}	
			
	});
	$(".form-control").focusout(function(){
		
		id_name = $(this).attr("id");
		
		//Check if form element is empty
		if(!$(this).val()){
			
			//Clear errors
			clearErrors();
			
			//Using the id_name grab the alert message from the message array
			//printAlert(message["empty"],id_name);
		}
		
		//Check if password is less than 6 characters
		if(id_name === "password" && $(this).val().length < 6){
			//Print alert
			printAlert(message["invalidpassword"],id_name);
		
		}
			
	});
	
	//When focused on a box remove the errors
	$(".form-control").focusin(function(){
		clearErrors();
	});
	
});
