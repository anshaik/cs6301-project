$("document").ready(function(){
	if(localStorage["cartsuccess"] === "yes"){
		printSuccess('Purchase Successful!','');
		localStorage.removeItem('cartsuccess');
		localStorage.removeItem("cart");
	}
});

function changeOrigin(name) {
    $("#origin").text(name);
}

function changeDestination(name) {
    $("#destination").text(name);
}