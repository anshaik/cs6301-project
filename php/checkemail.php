
<?php
		/*Checks if the username requested is available */
		$conn = new mysqli('localhost','buser','buser','mydb');
		
		if($conn->connect_error){
			die("Connection failed: ".$conn->connect_error);
		}
		
		//Acquire username from post request
		$email = $conn->real_escape_string($_POST['email']);
			
		//The query to find the username
		$sql = "SELECT email FROM user WHERE email = '$email'";
		
		$result = $conn->query($sql);
		
		//Check to see if the rows returned were greater than 0
		if($result->num_rows > 0){
			//Exists
			echo 1;
		} else {
			//Doesn't Exist
			echo 0;
		}
		
		$conn->close();
		
?>

