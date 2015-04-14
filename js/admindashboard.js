function getPurchaseDetails(){
	return $.ajax({
		url: "php/adminpurchasedetails.php",
		dataType: "text",
		type: "POST"
	});
}
function getUserDetails(){
	return $.ajax({
		url: "php/adminuserdetails.php",
		dataType: "text",
		type: "POST"
	});
}
function getBarGraphDetails(){
	return $.ajax({
		url: "php/bargraphdetails.php",
		dataType: "text",
		type: "POST"
	});
}
function deleteUser($email){
	return $.ajax({
		url: "php/deleteuser.php",
		dataType: "text",
		data : {
			email : email
		},
		type: "POST"
	});
}

$("document").ready(function(){
	
	getUserDetails().done(function (r){
		if(r){
			//Success
			//console.log(r);
			chartData = [];
			$.each(jQuery.parseJSON(r), function(key,value){
				email = value["email"];
				fname= value["fname"];
				lname = value["lname"];
				level = value["level"];
				//console.log(email);
				//console.log(fname);
				//console.log(lname);
				//console.log(level);
				button = "<td><button class=\"btn btn-danger\" id=" + "\"" + email + "\"" + ">" + "Remove" + "</button></td>";
				row = "<tr>"+"<td>"+email+"</td>"+"<td>"+fname+"</td>"+"<td>"+lname+"</td>"+"<td>"+level+"</td>"+button+"</tr>";
				$("#userdetails > tbody:last").append(row);
			});
			
			
			
		} else {
			//Failure
			console.log("Failed to get User Details");
		}
	});
	
	getPurchaseDetails().done(function (r){
		if(r){
			//Success
			//console.log(r);
			$.each(jQuery.parseJSON(r), function(key,value){
				email = value["user_email"];
				flightnum = value["fnumber"];
				price = value["price"];
				date = value["date"];
				//console.log(email);
				//console.log(flightnum);
				//console.log(price);
				//console.log(date);
				
				row = "<tr>"+"<td>"+email+"</td>"+"<td>"+flightnum+"</td>"+"<td>"+price+"</td>"+"<td>"+date+"</td>"+"</tr>";
				$("#purchasedetails > tbody:last").append(row);
			});
			
			
			
		} else {
			//Failure
			console.log("Failed to get Purchase Details");
		}
	});
	
	getBarGraphDetails().done(function (r){
		if(r){
			//Success
			
			new Morris.Bar({
				element: 'morris-bar-chart',
				data: jQuery.parseJSON(r),
				xkey: ['date'],
				ykeys: ['price'],
				labels: ['Value'],
				resize: true
			});
			
			new Morris.Line({
				element: 'morris-area-chart',
				data : jQuery.parseJSON(r),
				xkey: ['date'],
				ykeys: ['price'],
				labels : ['Value'],
				xLabels: ['date']
			});
		} else {
			//Failure
			console.log("Failed to get Average Purchase Information");
		}
	});
	
	$("#userdetails > tbody").on("click",".btn-danger",function(){
		console.log($(this).attr("id"));
		deleteUser($(this).attr("id")).done(function(r){
			if(r === 'Success'){
				console.log('User Successfully deleted');
				location.reload();
			} else {
				console.log('User was not deleted successfully');
			}
		});
	});
	
});