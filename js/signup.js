$("document").ready(function(){
	//When the register button is clicked
	$("#register").click(function(){
		console.log("button pressed");
		$(".alert-area").empty();
		$(".critical-alert-area").empty();
		//Check if all boxes are filled out, and requirements met for each
		if(!$("#username").val()){
			$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+"Username"+" is empty!"+"</div>");
		}
		if(!$("#password").val()){
			$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+"Password"+" is empty!"+"</div>");
		}
		if(!$("#repeatpassword").val()){
			$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+"Repeat Password"+" is empty!"+"</div>");
		}
		if(!$("#email").val()){
			$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+"Email Address"+" is empty!"+"</div>");
		}
		if(!$("#repeatemail").val()){
			$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+"Repeat Email"+" is empty!"+"</div>");
		}
		if($("#password").val() !== $("#repeatpassword").val()){
			$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+"Password and Repeat Password are not the same"+"</div>");
		}
		if($("#email").val() !== $("#repeatemail").val()){
			$(".alert-area").append("<div class=\"alert alert-danger\" role=\"alert\">"+"Email and Repeat Email are not the same"+"</div>");
		}
		//Query Database, Check if Username exists
		
		//If Username exists
			//Post Error
			
		//Else, Username doesn't exist
			//Post Success
			
			
	});
	$(".form-control").focusout(function(){
		
		
		id_name = $(this).attr("id");
		
		//Check if form element is empty
		if(!$(this).val()){
			
			$(".alert-area").empty();
			$(".critical-alert-area").empty()
			if(id_name === "username"){
				$(".alert-area").append("<div class=\"alert alert-warning\" role=\"alert\">"+"Username"+" is empty!"+"</div>");
			}
			if(id_name === "email"){
				$(".alert-area").append("<div class=\"alert alert-warning\" role=\"alert\">"+"Email"+" is empty!"+"</div>");
			}
			if(id_name === "repeatemail"){
				$(".alert-area").append("<div class=\"alert alert-warning\" role=\"alert\">"+"Repeat Email"+" is empty!"+"</div>");
			}
			if(id_name === "repeatpassword"){
				$(".alert-area").append("<div class=\"alert alert-warning\" role=\"alert\">"+"Repeat Password"+" is empty!"+"</div>");
			}
			
		}
		
		//Check if password is less than 6 characters
		if(id_name === "password" && $(this).val().length < 6){
			//Print alert
			$(".alert-area").append("<div class=\"alert alert-warning\" role=\"alert\">"+"Password"+" need to be 6 or more characters"+"</div>");
		
		}
		
		
		//Debug Statement
		//out = $(this).attr('id');
		//console.log(out);
	});
	$(".form-control").focusin(function(){
		$(".alert-area").empty();
	});
	
});