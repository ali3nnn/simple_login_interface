<?php
	$db_name = "generalLogin";
	$mysql_username = "alex";
	$mysql_password = "";
	$server_name = "localhost";

	$conn = mysqli_connect($server_name, $mysql_username, $mysql_password, $db_name);

	if($conn) {
		// echo "Connected to <b>".$db_name."</b>!<br><br>\n";
	}
	else {
		// echo "Conection failed!<br><br>\n";
	}

?>
