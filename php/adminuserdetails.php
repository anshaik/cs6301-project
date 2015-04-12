<?php
	#Establish connection
	$mysqli = new mysqli('localhost','buser','buser','mydb');
	
	#Setup Array, and Query
	$rArray = array();
	$query = "SELECT email,fname,lname,level FROM user";
	
	#Loop through results,save, and echo as JSON object 
	if($result = $mysqli->query($query)){
		while($row = $result->fetch_array(MYSQL_ASSOC)){
			$rArray[] = $row;
		}
		echo json_encode($rArray);
	}
	
	#Clean Up
	$result->close();
	$mysqli->close();
?>