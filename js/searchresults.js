$("document").ready(function(){
	console.log($.parseJSON(localStorage["search"]));
	searchObj = $.parseJSON(localStorage["search"]);
	$.each(searchObj, function(index, element){
		//console.log(index);
		//Create Left Div with 3 letter codes and price
		originToDest = "<h2>" + element.origin.toUpperCase() + "<->" + element.destination.toUpperCase() + "</h2>";
		price = "<h1>$" + element.price +"</h1>";
		divLeft = "<div class=\"col-xs-12 col-sm-12 col-md-3\">" + originToDest + price + "</div>";
		
		//Create Middle with Origin Departure and Return Departure
		origindeparture = "<h3>Origin Departure " + element.origindepaturetime.replace("T"," ") + "</h3>";
		returndeparture = "<h3>Return Departure " + element.destinationdeparturetime.replace("T"," ") +"</h3>";
		divMidLeft = "<div class=\"col-xs-12 col-sm-12 col-md-3\">" + origindeparture + returndeparture + "</div>";
		
		//Create Middle Right with Carrier Code
		
		carrier = "<h2>Carrier</h2>";
		carrierCode = "<h1>" + element.carriercode + "</h1>";
		
		divMidRight = "<div class=\"col-xs-12 col-sm-12 col-md-3\">" + carrier + carrierCode + "</div>";
		//Create Button and Flight Number
		
		flightnumber = "<h2>Flight #: " + element.flightnumber + "</h2>";
		button = "<button class=\"btn btn-success\"><h2>Add to Cart</h2></button>";
		divRight = "<div class=\"col-xs-12 col-sm-12 col-md-3\">" + flightnumber + button + "</div>";
		//Finish creating article div
		article = "<article class=\"jumbotron search-result row\">" + divLeft + divMidLeft + divMidRight + divRight +  "</article>";
		
		$("#searchresults").append(article);
	});
	
	$("#searchresults").on("click",".btn-success",function(){
		console.log("button pressed!");
	});
	
});