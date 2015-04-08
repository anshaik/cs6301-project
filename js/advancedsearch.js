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
});