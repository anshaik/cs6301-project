
<?php
	/*
		this page will insert user into database
	*/
	//Create Connection
	$conn = new mysqli('localhost','buser','buser');
	
	//Check if connected
	if($conn->connect_error){
		die('Could not connect: '.$conn->connect_error);
	}
	
	//Get all the variables from the POST request
	$email = $conn->real_escape_string($_POST['email']);
	$password = $conn->real_escape_string($_POST['password']);
	$firstname = $conn->real_escape_string($_POST['firstname']);
	$lastname = $conn->real_escape_string($_POST['lastname']);
	
	//Create Query
	$sql = "INSERT INTO mydb.user (email,password,fname,lname) VALUES ('$email','$password','$firstname','$lastname')";
	
	if($conn->query($sql) === TRUE){
		echo 1;
	} else {
		echo 0;
	}
	
	$conn->close();
	
	
?>