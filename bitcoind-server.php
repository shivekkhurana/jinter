<?php
	require_once 'jsonRPCClient.php';
	
	$url = "127.0.0.1";
	$port = "8332";
	$username = "un";
	$password = "pw";	

	$bitcoin = new jsonRPCClient('http://'.$username.':'.$password.'@'.$url.':'.$port.'/');

?>