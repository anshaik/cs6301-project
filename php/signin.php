
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
	$sql = "SELECT * FROM user WHERE email = '$email' AND password='$password'";
	$result = $conn->query($sql);
	$row = $result->fetch_array(MYSQLI_ASSOC);
	//echo var_dump($row);
	//Check if query was successful
	if(($row["level"] == 0 || $row["level"] == 1) && $row["level"] != null){

		//Success
		echo $row["level"];
	} else {
		//Fail
		echo 'error';
	}
	
	//End connection
	$conn->close();
	
	
?>