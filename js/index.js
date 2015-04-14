$("document").ready(function(){
	if(localStorage["cartsuccess"] === "yes"){
		printSuccess('Purchase Successful!','');
		localStorage["cartsuccess"] = '';
		localStorage["cart"] = '';
	}
});