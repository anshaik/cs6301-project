<?php
	#Establish connection
	$mysqli = new mysqli('localhost','buser','buser','mydb');
	
	#Setup Array, and Query
	$rArray = array();
	$query = "SELECT user_email,fnumber,price,date from purchase_history";
	
	
	if($result = $mysqli->query($query)){
		while($row = $result->fetch_array(MYSQL_ASSOC)){
			$rArray[] = $row;
		}
		echo json_encode($rArray);
	}
	
	$result->close();
	$mysqli->close();
	
?>