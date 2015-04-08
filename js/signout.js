function signOut(){
	localStorage.clear();
	$("#navbar-signedin").empty();
	$("#nvabar-signedout").show();
}

$("document").ready(function(){
	$("#navbar-signedin").on("click","#signedindropdown",function(){
		signOut();
		window.location.href='index.html';
	});
});
