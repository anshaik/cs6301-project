function checkOut($fnumber,$email,$seat,$price){
		console.log(fnumber);
		return $.ajax({
			url: "php/addflight.php",
			type: "POST",
			'dataType' : "text",
			data : {
				fnumber : fnumber,
				email : email,
				seat : seat,
				price : price
			},
			success: function(msg){
				console.log("POST request successful" + msg);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log("POST request failed:" + "\nStatus:" + textStatus + "\n"+errorThrown);
				console.log(errorThrown);
				console.log(XMLHttpRequest);
				console.log(textStatus);
			}
		});
}
function makeItemBox($flightnumber,$carriercode,$price,$date,$returndate,$source,$destination,$id){
	
	//console.log(index);
	//Create Left Div with 3 letter codes and price
	originToDest = "<h2>" + source.toUpperCase() + "<->" + destination.toUpperCase() + "</h2>";
	price = "<h1>$" + price +"</h1>";
	divLeft = "<div class=\"col-xs-12 col-sm-12 col-md-3\">" + originToDest + price + "</div>";
		
	//Create Middle with Origin Departure and Return Departure
	origindeparture = "<h3>Origin Departure " + date.replace("T"," ") + "</h3>";
	returndeparture = "<h3>Return Departure " + returndate.replace("T"," ") +"</h3>";
	divMidLeft = "<div class=\"col-xs-12 col-sm-12 col-md-3\">" + origindeparture + returndeparture + "</div>";
		
	//Create Middle Right with Carrier Code
		
	carrier = "<h2>Carrier</h2>";
	carrierCode = "<h1>" + carriercode + "</h1>";
		
	divMidRight = "<div class=\"col-xs-12 col-sm-12 col-md-3\">" + carrier + carrierCode + "</div>";
	//Create Button and Flight Number
		
	flightnumber = "<h2>Flight #: " + flightnumber + "</h2>";
	button = "<button id=\""  + id +   "\" class=\"btn btn-success\"><h2>Remove Flight</h2></button>";
	divRight = "<div class=\"col-xs-12 col-sm-12 col-md-3\">" + flightnumber + button + "</div>";
	//Finish creating article div
	article = "<article class=\"jumbotron search-result row\">" + divLeft + divMidLeft + divMidRight + divRight +  "</article>";
	$("#carttable").append(article);
}

$("document").ready(function(){
	
	//Grab Cart, turn into JSON object
	if(localStorage["cart"]){
		//console.log(localStorage["cart"]);
		var cart = $.parseJSON(localStorage["cart"]);
		//console.log($.parseJSON(localStorage["cart"]));
		
		if(cart){
			$.each(cart, function(index,element){
				//console.log(element.flightnumber);
				//console.log(element.price);
				//console.log(element.date);
				//console.log(element.origin);
				//console.log(element.destination);
				//console.log(element.carriercode);
				flightnumber = element.flightnumber;
				carriercode = element.carriercode;
				price = element.price;
				date = element.origindepaturetime;
				returndate = element.destinationdeparturetime;
				source = element.origin;
				destination = element.destination;
				id = index;

				
				makeItemBox(flightnumber,carriercode,price,date,returndate,source,destination,id);
				
			});
		} 
		
	}
	$("#carttable").on("click",".btn-success",function(){
		console.log($(this).attr("id"));
		var mObj = $.parseJSON(localStorage["cart"]);
		if(mObj){
			delete mObj[$(this).attr("id")];
			localStorage["cart"] = JSON.stringify(mObj);
			localStorage["cartitemremoved"] = 'yes'; 
			window.location.href = "checkout.html";
		} else {
			printCritical("There's no items in the cart!",'');
		}	
	});
	
	$("#checkout").click(function(){
		console.log("Check out Clicked!");
		console.log(localStorage["cart"]);
		jObj = $.parseJSON(localStorage["cart"]);
		$.each(jObj,function(index,element){
			fnumber = element.flightnumber;
			email = localStorage["email"];
			price = element.price;
			seat = 0;
			checkOut(fnumber,email,seat,price).done(function(r){
				if(r === 'Success'){
					console.log("successfully added");
					localStorage["cartsuccess"] = "yes";
					window.location.href = "index.html";
				} else {
					console.log("error adding cart");
				}
			});
		});
		
	});
	
	if(localStorage["cartitemremoved"] === 'yes'){
		printSuccess('Item successfully removed!','');
		localStorage['cartitemremoved'] = '';
	}
	
	
});