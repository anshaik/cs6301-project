<?php
	/*
		Get the Account details for the account
	*/
	/*Checks if the username requested is available */
	$conn = new mysqli('localhost','buser','buser','mydb');
		
	if($conn->connect_error){
		die("Connection failed: ".$conn->connect_error);
	}
		
	//Acquire username from post request
	$email = $conn->real_escape_string($_POST['email']);
	
	//Create Query
	$query = "SELECT fname, lname FROM mydb.user WHERE email='$email'";
	
	$result = $conn->query($query);
	
	$row=mysqli_fetch_assoc($result);

	if($result){
		$json_string = json_encode($row);
		echo $json_string;
	} else {
		echo 0;
	}

	$conn->close();
?>