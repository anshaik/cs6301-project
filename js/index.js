$("document").ready(function(){
	if(localStorage["cartsuccess"] === "yes"){
		printSuccess('Purchase Successful!','');
		localStorage.removeItem('cartsuccess');
		localStorage.removeItem("cart");
	}
});