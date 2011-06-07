function begin_mining()
{
    $.ajax({
	url: "getwork.php",
	cache: false,
	success: function(data){
	    var response = JSON.parse(data);
	    
	    var job = {};
	    
	    job.midstate = hexstring_to_binary(response.midstate);
	    job.data = hexstring_to_binary(response.data);
	    job.hash1 = hexstring_to_binary(response.hash1);
	    job.target = hexstring_to_binary(response.target);
	    
	    // Remove the first 512-bits of data, since they aren't used
	    // in calculating hashes.
	    job.data = job.data.slice(16);

	    // Set startdate
	    job.start_date = new Date().getTime();	    
	    
	    var worker = new Worker("miner.js");
	    worker.onmessage = onWorkerMessage;
	    worker.onerror = onWorkerError;
	    worker.postMessage(job);

	}
    });



}

function onWorkerMessage(event) {
	var job = event.data;

	// We've got a Golden Ticket!!!
	if(job.golden_ticket !== false) {
		$('#golden-ticket').val(job.golden_ticket);

	    // Submit Work using AJAX.
	    $.post("submitwork.php", { golden_ticket: job.golden_ticket } );
		
	}
	else {
		// :'( it was just an update
		var total_time = (new Date().getTime()) - job.start_date;
		var hashes_per_second = job.total_hashes * 1000 / total_time;
		$('#total-hashes').val(job.total_hashes);
		$('#hashes-per-second').val(hashes_per_second);
	}
}

function onWorkerError(event) {
	throw event.data;
}

// Given a hex string, returns an array of 32-bit integers
// Data is assumed to be stored least-significant byte first (in the string)
function hexstring_to_binary(str)
{
	var result = new Array();

	for(var i = 0; i < str.length; i += 8) {
		var number = 0x00000000;
		
		for(var j = 0; j < 4; ++j) {
			number = safe_add(number, hex_to_byte(str.substring(i + j*2, i + j*2 + 2)) << (j*8));
		}

		result.push(number);
	}

	return result;
}

function hex_to_byte(hex)
{
	return( parseInt(hex, 16));
}


window.onload = function(){ 
    begin_mining();
}