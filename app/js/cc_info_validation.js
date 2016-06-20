$(document).ready(function () {

  $.validator.addMethod("creditCard", function(value, element) {
    if (value === "4111") {
    	console.log("value is 4111, Return True");
    	$('#checkout-btn').removeAttr('disabled');
    	return true ;
    } else {
    	console.log("value is NOT Valid, Return False");
    	return false;
    }
  }, "Please enter valid credit card number");

  $.validator.addMethod("couponCode", function(value, element) {
    if (value === "CB4YE3B3") {
      return true
    } else if (value.length === 0) {
      return true
    } else {
      return false
    }
  }, "Please enter valid coupon");


  $('#input-form').validate({ // initialize the plugin
    debug: false,
    rules: {
      cc:  					{ creditCard: true },
      fname: 				{ required: true },
      lname: 				{ required: true },
      address: 			{ required: true },
      zip_ship: 		{ required: true },
      city: 				{ required: true },
      state: 				{ required: true },
      exp_month:  	{ required: true },
      exp_year: 		{ required: true },
      cvv: 					{ required: true },
      zip_pay: 			{ required: true },
      promo_field:  { couponCode: true}
    },
    errorPlacement: function(error, element) {
      $('#error-label').html(error);
    },
		submitHandler: function(form) {
    	window.open("https://www.google.com");
     }
	});
});
