<?php
	require_once 'bitcoind-server.php';

	echo json_encode($bitcoin->getwork());

?>
