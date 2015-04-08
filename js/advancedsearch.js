$("document").ready(function(){
	$(".form-control").focusin(function(){
		id_name = $(this).attr("id");
		console.log(id_name);
		if(id_name === 'destination'){
			$("#informationbox").append("<p>Destination is the desired location for which you wish to land. *Must be the 3-letter code for the airport.</p>");
		}
		if(id_name === 'origin'){
			$("#informationbox").append("<p>Origin is the starting locaiton for which you wish to begin. *Must be the 3-letter code for the airport.</p>")
		}
		if(id_name === 'date'){
			$("#informationbox").append("<p></p>")
		}
		if(id_name === 'returndate'){
			$("#informationbox").append("<p></p>")
		}
		if(id_name === 'minfare'){
			$("#informationbox").append("<p></p>")
		}
		if(id_name === 'maxfare'){
			$("#informationbox").append("<p></p>")
		}
		if(id_name === 'stops'){
			$("#informationbox").append("<p></p>")
		}
		if(id_name === 'carrier'){
			$("#informationbox").append("<p></p>")
		}
	});
	$(".form-control").focusout(function(){
			$("#informationbox").empty();
	});
});