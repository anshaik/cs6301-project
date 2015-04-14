<?php
	/* Adds the requested flight */
	$conn = new mysqli('localhost','buser','buser','mydb');
	
	if($conn->connect_error){
		die("Connection failed: ".$conn->connect_error);
	}
	
	//Acquire username from post request
	$fnumber = $conn->real_escape_string($_POST['fnumber'])
	$email = $conn->real_escape_string($_POST['email']);
	$seat = $conn->real_escape_string($_POST['seat'])
	$price = $conn->real_escape_string($_POST['price']);
	$sql = "insert into purchase_history values ($fnumber, '$email', '$seat', $price, CURRENT_TIMESTAMP, '0');";
	$result = $conn->query($sql);

	if($result)
	{
		echo "Success";
	}
	else
	{
		echo "Error";
	}
?>