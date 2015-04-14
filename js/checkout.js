
function makeItemBox($flightnumber,$seat,$price,$date,$source,$destination,$name){
	removeButton = "<button id=\"removeflight\" class=\"btn btn-success pull-right\""+">Remove" + "</button>";
	panelHeading = "<div class=\"panel-heading\">" + "Flight Number: #" + flightnumber + "<p class=\"pull-right\">Date: " + date + "</p>" + "</div>";
	panelBody = "<div class=\"panel-body\">" + "<p> From: " + source + "</p>" + "<p> To: " + destination "</p>" + "<p> Seat #: " + seat + "</p>" + "<p> Price: " + price + "</p>" + "<p> Name: " + name + "</p>" + removeButton + "</div>"
	$("#carttable").append(panelHeading+panelBody);
}

$("document").ready(function({
	
	//Grab Cart, turn into JSON object
	var cart = sessionStorage.getItem("cart");
	var cartObj = JSON.parse(cart);
	
	if(cartObj){
		$.each(cartObj, function(index,element){
			console.log(element.flightnumber);
			console.log(element.seat);
			console.log(element.price);
			console.log(element.date);
			console.log(element.source);
			console.log(element.destination);
			console.log(element.name);
			makeItemBox(flightnumber,seat,price,date,source,destination,name);
			
		});
	}
	
	$("#carttable").on("click","#removeflight",function(){
		console.log($(this).val());
	});
	
	
});