function advancedSearchFlights($origin,$destination,$date,$returndate,$maxfare,$minfare,$stops,$eticket){
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
		if(stops){
			query = query + "&outboundflightstops="+stops;
		}
		if(eticket){
			query = query + "&eticketsonly="+eticket;
		}
		if(minfare){
			query = query + "&minfare="+minfare;
		}
		if(maxfare){
			query = query + "&maxfare="+maxfare;
		}
		
		getToken().done(function(r){
		access_token = r['access_token'];
		localStorage["search"] = '';
		callAPI(query,access_token).done(function(r){
			//console.log(r['PricedItineraries']);
			var count = 0;
			var masterJSONObj = {};
			$.each(r['PricedItineraries'],function(index,value){
				//Flight Number Path
				flightnumber = value.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].FlightNumber;
				carriercode = value.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].OperatingAirline.Code;
				origindeparturetime = value.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0].FlightSegment[0].DepartureDateTime;
				destinationdeparturetime = value.AirItinerary.OriginDestinationOptions.OriginDestinationOption[1].FlightSegment[0].DepartureDateTime;
				price = value.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount
				//console.log(flightnumber);
				//console.log(what);
				//console.log(time);
				//console.log(rtime);
				//console.log(origin+ ":" + destination + ":"+date+":"+returndate+":"+value.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount+":"+flightnumber);
				var JSONObj = {"flightnumber" : flightnumber, "carriercode" : carriercode, "origindepaturetime" : origindeparturetime, "destinationdeparturetime" : destinationdeparturetime, "origin" : origin, "destination" : destination, "date" : date, "returndate" : returndate, "price" : price};
				masterJSONObj[count] = JSONObj;
				count = count + 1;
			});
			console.log(masterJSONObj);
			localStorage["search"] = JSON.stringify(masterJSONObj);
			window.location.href = "searchresults.html"
		});
	});
}


$("document").ready(function(){
	$(".form-control").focusin(function(){
		id_name = $(this).attr("id");
		if(id_name === 'destination'){
			$("#informationbox").append("<p>Destination is the desired location for which you wish to land. *Must be the 3-letter code for the airport.</p>");
		}
		if(id_name === 'origin'){
			$("#informationbox").append("<p>Origin is the starting locaiton for which you wish to begin. *Must be the 3-letter code for the airport.</p>")
		}
		if(id_name === 'date'){
			$("#informationbox").append("<p>The staring date for the flight.</p>")
		}
		if(id_name === 'returndate'){
			$("#informationbox").append("<p>The return date for the last date.</p>")
		}
		if(id_name === 'minfare'){
			$("#informationbox").append("<p>The minimum price for the flights.</p>")
		}
		if(id_name === 'maxfare'){
			$("#informationbox").append("<p>The maximum price for the flights.</p>")
		}
		if(id_name === 'stops'){
			$("#informationbox").append("<p>The maximum number of stops between the origin and the destination.</p>")
		}
		if(id_name === 'carrier'){
			$("#informationbox").append("<p>The 2-digit carrier code for the flights.</p>")
		}
	});
	$(".form-control").focusout(function(){
			$("#informationbox").empty();
	});
	
	$("#advancedsearchbutton").click(function(){
		//Debug statement
		localStorage["search"] = '';
		console.log("Search was clicked!");
		origin = $("#origin").val();
		destination = $("#destination").val();
		date = $("#date").val();
		returndate = $("#returndate").val();
		maxfare = $("#maxfare").val();
		minfare = $("#minfare").val();
		stops = $("#stops").val();
		eticket = $("#eticket").val();
		
		//token = getToken();
		//console.log(token);
		advancedSearchFlights(origin,destination,date,returndate,maxfare,minfare,stops,eticket);
	});
	
	
	
});