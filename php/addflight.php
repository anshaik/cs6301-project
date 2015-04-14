<?php
	/* Adds the requested flight */
	$conn = new mysqli('localhost','buser','buser','mydb');
	
	if($conn->connect_error){
		die("Connection failed: ".$conn->connect_error);
	}
	
	//Acquire username from post request

	$fnumber = $conn->real_escape_string($_POST['fnumber']);
	$email = $conn->real_escape_string($_POST['email']);
	$seat = $conn->real_escape_string($_POST['seat']);
	$price = $conn->real_escape_string($_POST['price']);
	$sql = "INSERT INTO purchase_history VALUE ('0',$fnumber, '$email', '$seat', $price, CURRENT_TIMESTAMP, '1')";
	$result = $conn->query($sql);

	if(!$conn->query($sql))
	{
		echo "Error".mysqli_error($conn);
	}
	else
	{
		echo "Success";
	}
?>