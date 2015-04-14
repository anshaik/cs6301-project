function callAPI($query){
	//Ajax call to query to Sabre API
	return $.ajax({
		type: "GET",
		url: query,
		crossDomain: true,
		dataType: "json",
		beforeSend : function(xhr){
			xhr.setRequestHeader("Authorization", "Shared/IDL:IceSess\/SessMgr:1\.0.IDL/Common/!ICESMS\/ACPCRTC!ICESMSLB\/CRT.LB!-3546439060654835965!272138!0!!E2E-1");
			xhr.setRequestHeader("X-Originating-Ip","129.110.241.140");
		}
	});
}
function getToken(){
	/*
	return $.ajax({
		type: "POST",
		url: "https://api.sabre.com/v1/auth/token",
		dataType: "jsonp",
		data :"grant-type=client_credentials",
		beforeSend : function(xhr){
			xhr.setRequestHeader("Authorization: Basic","VmpFNllYbzJjelp4YmpSak1tVjFhbVJ6TXpwRVJWWkRSVTVVUlZJNlJWaFVJQT09OmFVMHdVbVUxVW5jZw==");
			xhr.setRequestHeader("Content-type:","application/x-www-form-urlencoded");
			//console.log("Post request is sending");
		},
		success: function(msg){
			console.log("POST request successful" + msg);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log("POST request failed:" + "Status:" + textStatus + "\nError:"+errorThrown);
		}
	});
	*/
	return $.ajax({
		type: "POST",
		url: "php/token.php",
		dataType : "text"
	});
}
function searchFlights($origin,$destination,$date,$returndate,$token){
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
	getToken().done(function(r){
		console.log(r);
	});
	//callAPI(query).done(function(r){
		//console.log(r);
	//});
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