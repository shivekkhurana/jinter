<?php
	require_once 'jsonRPCClient.php';
	
	$url = "api.bitcoin.cz";
	$port = "8332";
	$username = "shivekkhurana.worker1";
	$password = "worker1";	

	$bitcoin = new jsonRPCClient('http://'.$username.':'.$password.'@'.$url.':'.$port.'/');
?>