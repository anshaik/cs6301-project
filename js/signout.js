function signOut(){
	localStorage.clear();
	$("#navbar-signedin").empty();
	$("#nvabar-signedout").show();
	$.cookie('signedout','yes');
}

$("document").ready(function(){
	
	if($.cookie('signedout') == 'yes'){
		printSuccess("Successfully Signed Out",'');
		$.removeCookie('signedout');
	}
	
	$("#navbar-signedin").on("click","#signedindropdown",function(){
		signOut();
		window.location.href='index.html';
	});
	
	$("#navbar-signedin").on("click","#accountdetails",function(){
		window.location.href='accountdetails.html';
	});
});


