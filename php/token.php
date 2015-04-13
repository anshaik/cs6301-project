<?php
	$url = "https://api.sabre.com/";
	//Go to https://developer.sabre.com/docs/read/rest_basics/authentication
	//to Read more on building your APP Key.
	//TO Generate your App Key below, 
	//1 - Base64 your Client Id
	//2 - Base64 Client Secret
	//3 - Concat both Base64 values with a :
	//4 - Base64 the concatenation.
	$dsAppKey = "VmpFNllYbzJjelp4YmpSak1tVjFhbVJ6TXpwRVJWWkRSVTVVUlZJNlJWaFU6YVUwd1VtVTFVbmM9";
	$lastToken = null;
	$expireAt = null;
	$lastInfo = null;
	$debugMode = false;
	$numretries = 0;
		
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_CAINFO, dirname(__FILE__)."/cacert.pem");
	curl_setopt($ch, CURLOPT_URL, $url . 'v1/auth/token');
	curl_setopt($ch, CURLOPT_POST, true);
	//curl_setopt($ch, CURLOPT_HEADER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/x-www-form-urlencoded','Authorization: Basic ' . $dsAppKey));
	curl_setopt($ch, CURLOPT_POSTFIELDS, 'grant_type=client_credentials');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$retVal = curl_exec($ch);
				
	var_dump(curl_error($ch));
				
	curl_close($ch);
	//parse token result
	$js = json_decode($retVal,true);
	var_dump($js);

	
	
?>