<?php
	#Establish connection
	$mysqli = new mysqli('localhost','buser','buser','mydb');
	
	#Setup Array, and Query
	$email = $_POST["email"];
	$sql = "DELETE FROM user WHERE user.email='$email'";
	
	$query = $mysqli->query($sql);
	
	if($query){
		echo 'Success';
	} else {
		echo 'Failure';
	}
	
	#Clean Up
	$mysqli->close();
?>