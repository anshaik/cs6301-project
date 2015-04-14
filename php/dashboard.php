<?php
	/*Checks if the username requested is available */
	$conn = new mysqli('localhost','buser','buser','mydb');
	
	if($conn->connect_error){
		die("Connection failed: ".$conn->connect_error);
	}
	
	//Acquire username from post request
	$email = $conn->real_escape_string($_POST['email']);
	$sql = "select * from purchase_history where user_email ='$email';";
	$result = $conn->query($sql);

	$output = "";

	while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
		if($row[show] == 1)
		{
			$output = $output."<tr>";
			$output = $output."<td>".$row[fnumber]."</td>";
			$output = $output."<td>".$row[seat]."</td>";
			$output = $output."<td>".$row[price]."</td>";
			$output = $output."<td>".$row[date]."</td>";
			$output = $output."</tr>";
		}
	}

	echo $output;
?>