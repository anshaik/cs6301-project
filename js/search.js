function callAPI($query,$access_token){
	//Ajax call to query to Sabre API
	console.log(access_token);
	return $.ajax({
		type: "GET",
		url: query,
		dataType: "json",
		'Content-type' : "application/x-www-form-urlencoded",
		'headers' : {'Authorization':'Bearer '+access_token}
	});
}
function getToken(){
	
	clientId = "V1:az6s6qn4c2eujds3:DEVCENTER:EXT";
	clientSecret = "iM0Re5Rw";
	
	encodedClientId = btoa(clientId);
	encodedClientSecret = btoa(clientSecret);
	
	clientKey = encodedClientId+":"+encodedClientSecret;
	
	encodedClientKey = btoa(clientKey);
	
	authObj = "Basic "+encodedClientKey+":"+encodedClientSecret;
	console.log(encodedClientId);
	console.log(encodedClientSecret);
	console.log(encodedClientKey);
	
	//VjE6YXo2czZxbjRjMmV1amRzMzpERVZDRU5URVI6RVhU
	//aU0wUmU1Unc=
	
	return $.ajax({
		url: "https://api.test.sabre.com/v1/auth/token",
		type: "POST",
		'dataType' : "json",
		'data' : "grant_type=client_credentials",
		'Content-type' : "application/x-www-form-urlencoded",
		'headers' : {'Authorization':'Basic '+encodedClientKey},
		success: function(msg){
			console.log("POST request successful" + msg);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log("POST request failed:" + "\nStatus:" + textStatus + "\n"+errorThrown);
		}
	});
	
	/*
	return $.ajax({
		type: "POST",
		url: "php/token.php",
		dataType : "text"
	});
	*/
}
function searchFlights($origin,$destination,$date,$returndate,$token){
	console.log("Search Flights called!");
	query = "https://api.test.sabre.com/v1/shop/flights?";
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
	getToken().done(function(r){
		access_token = r['access_token'];
		callAPI(query,access_token).done(function(r){
			console.log(r['PricedItineraries']);
			$.each(r['PricedItineraries'],function(index,value){
				//Flight Number Path
				flightnumber = value.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber;
				what = value.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].OperatingAirline.Code;
				time = value.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime;
				rtime = value.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime;
				console.log(flightnumber);
				console.log(what);
				console.log(time);
				console.log(rtime);
				console.log(origin+ ":" + destination + ":"+date+":"+returndate+":"+value.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount+":"+flightnumber);
			});
		});
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
		token = '';
		//token = getToken();
		//console.log(token);
		searchFlights(origin,destination,date,returndate,token);
	});
	
	$("#advancedsearch").click(function(){
		//Debug statement
		console.log("Advanced Search was clicked!");
		window.location.href = "advancedsearch.html";
	});
});