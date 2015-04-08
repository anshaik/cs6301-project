function callAPI($query){
	//Ajax call to query to Sabre API
	return $.ajax({
		url: query,
		dataType: "text",
		type: "GET",
	});
}
function searchFlights($origin,$destination,$date,$returndate){
	console.log("Search Flights called!");
	query = "https://api.sabre.com/v1/shop/flights?";
	if(origin){
		query = query + "origin="+origin;
	}
	if(destination){
		query = query + "&destination="+destination;
	}
	if(date){
		query = query + "&departuredate="+date;
	}
	if(returndate){
		query = query + "&returndate="+returndate;
	}
	callAPI(query).done(function(r){
		console.log(r);
	});
}
$("document").ready(function(){
	//Search button was clicked
	$("#search").click(function(){
		//Debug statement
		console.log("Search was clicked!");
		origin = $("#origin").val();
		destination = $("#destination").val();
		date = $("#date").val();
		returndate = $("#returndate").val()
		searchFlights(origin,destination,date,returndate);
	});
	
	$("#advancedsearch").click(function(){
		//Debug statement
		console.log("Advanced Search was clicked!");
		window.location.href = "advancedsearch.html";
	});
});