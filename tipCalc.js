function calculate () {
	// dollar sign references JQuery library
	var amount = $('#amount').val();
	var percentage = $('#percentage').val();
	var tip = amount * (percentage / 100);
	var total = Number(amount) + tip;
	// lines 8-14 are functions to store the values in the results field
	// toFixed(2) ensures only 2 digits after decimal point
	$('#tip').val(tip.toFixed(2) );
	  $('#total').val (total.toFixed(2) );
	  // prevents form from submitting
	  return false;
	}	
	
	$('#calculator').submit ( calculate );

