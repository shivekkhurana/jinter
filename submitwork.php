<?php
	
	require_once 'bitcoind-server.php';

	if ($_GET['golden_ticket'] != NULL){

	   $solution = $_POST['golden_ticket'];
	   echo print_r($bitcoin->getwork($solution));

	}

?>
