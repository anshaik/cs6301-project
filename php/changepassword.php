<?php

	/*
		Changes the current accounts password
	*/
	$conn = new mysqli('localhost','buser','buser','mydb');
		
	if($conn->connect_error){
		die("Connection failed: ".$conn->connect_error);
	}

	//Acquire email and new password from post request
	$email = $conn->real_escape_string($_POST['email']);
	$password = $conn->real_escape_string($_POST['password']);
	
	$query = "UPDATE user SET password='$password' WHERE email='$email'";
	
	if($conn->query($query) === TRUE){
		echo 1;
	} else {
		echo 0;
	}
	
	$conn->close();
?>