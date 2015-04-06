
<?php
	/*
		this page will signin user and create a session 
		two levels of signin: normal user and admin user
	*/
	//Setup connection
	$conn = new mysqli('localhost','buser','buser','mydb');
	
	//Check if connected
	if($conn->connect_error){
		die('Could not connect: '.$conn->connect_error);
	}
	
	//Get all the variables from the POST request
	$email = $conn->real_escape_string($_POST['email']);
	$password = $conn->real_escape_string($_POST['password']);
	
	//Create Query
	$sql = "SELECT email, password FROM user WHERE email = '$email' AND password='$password'";
	
	//Check if query was successful
	if($conn->query($sql)){
		//Success
		echo 1;
	} else {
		//Fail
		echo 0;
	}
	
	//End connection
	$conn->close();
	
	
?>