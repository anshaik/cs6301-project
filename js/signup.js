//Clears out all errors on the divs for errors and alerts
function clearErrors(){
	$(".alert-area").empty();
}

//Check if valid email address
function validEmailAddress(email) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
};

//Cleans up print success
function printSuccess($alert,$id_name){
	$(".alert-area").append("<div class=\"alert alert-success\" role=\"alert\">"+$id_name+" "+$alert+"</div>");
}

//Cleans up printing alert a billion times
function printCritical($alert,$id_name){
	$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+$id_name+" "+$alert+"</div>");
}

//Cleans up print warnings
function printAlert($alert,$id_name){
	$(".alert-area").append("<div class=\"alert alert-warning\" role=\"alert\">"+$id_name+" "+$alert+"</div>");
}

function emailExists($email){
	
	//Ajax call to query to see if email exists
	return $.ajax({
		url: "php/checkemail.php",
		dataType: "text",
		type: "POST",
		data: {
			email : email
		}
	});
}
function createUser($email,$password,$firstname,$lastname){
	
	//Ajax call to create User
	return $.ajax({
		url: "php/signup.php",
		dataTYpe: "text",
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
	
	//When the register button is clicked
	$("#register").click(function(){
		invalid_regristration = false;
		
		//Clean error message div's
		clearErrors();
		
		//Check if all boxes are non-empty
		$('.form-control').each(function(i, obj){
			
			//Get the name of the box
			id_name = $(this).attr("id");
			
			//Print Error, and set Registration to invalid
			if(!$(this).val()){
				printCritical(message["empty"],id_name);
				invalid_regristration = true;
			}
		});
		
		
		//Check for specific requirements
		
		//Check if The Password and Repeat Password are equal
		if($('#Password').val() != $("[id='Repeat Password']").val()){
			printCritical(message["repeat"],'Password and Repeat Password');
			invalid_regristration = true;
		}
		
		//Check if the Email and Repeat Email are equal
		if($('#Email').val() != $("[id='Repeat Email']").val()){
			printCritical(message["repeat"],'Email and Repeat Email');
			invalid_regristration = true;
		}
		
		//Check if Password is more than six characters
		if($('#Password').val() && $('#Password').val().length < 6){
			printCritical(message["invalidpassword"],'');
			invalid_regristration = true;
		}
		
		if(!validEmailAddress($('#Email').val())){
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
							//Success
							printSuccess(message["success"],'');
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
			printAlert(message["empty"],id_name);
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
