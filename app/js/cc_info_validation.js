$(document).ready(function () {

  var placeOrder = $('#checkout-btn');

  var billingZip = $('#zip-pay');
  var fname = $('#f-name');
  var lname = $('#l-name');
  var address = $('#sublocality');
  var zipShip = $('#postal_code');
  var city = $('#locality');
  var state = $('#administrative_area_level_1');
  var cardNumber = $('#card-number');
  var expMonth = $('#exp-month');
  var expYear = $('#exp-year');
  var cvv = $('#cvv');

  var inputFields = [fname,lname, address, zipShip, city,state,cardNumber,expMonth,expYear,cvv, billingZip];
  // ,address,zipShip,city,state,cardNumber,expMonth,expYear,cvv];

  function checkAll() {
    console.log("checkAll() Running");
    var counter = 10;
    
    // for fields in inputFields
    $.each(inputFields, function( index, value ) {
      // alert( index + ": " + value );
      console.log($(this).val());
      if ($(this).val() != "") {
        counter --;
        if (counter < 1) {
          console.log("counter is less than 1");
          placeOrder.removeAttr('disabled');
        } else {
          console.log("should be disbaled");
          placeOrder.prop('disabled', true);
          return false;
        }
        // placeOrder.attr('disabled') = true;
        
        console.log(counter);
      }
    });

    // inputFields.each(function(field) {
      
      // if (field.val() != "") {
      //   console.log(counter);

           
      // }
    // });
  };


  $.validator.addMethod("creditCard", function(value, element) {
    if (value === "4111") {
        console.log("value is 4111, Return True");
        console.log(inputFields.length);
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
    	return false;
    }
  }, "Please enter valid credit card number");
  
  $.validator.addMethod("firstName", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your first name");

  $.validator.addMethod("lastName", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your last name");

  $.validator.addMethod("streetAddress", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your street address");

  $.validator.addMethod("shippingZipCode", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your shipping zip code");

  $.validator.addMethod("shippingCity", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your shipping city");

  $.validator.addMethod("shippingState", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your shipping state");

  $.validator.addMethod("expirationMonth", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your card expiration month");

  $.validator.addMethod("expirationYear", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your car expriation year");

  $.validator.addMethod("CVV", function(value, element) {
    if (value != "") {
        checkAll();
        return true ;
    } else {
      console.log("Disable 'PLACE ORDER' Button => True");
      return false;
    }
  }, "Please enter your Security Code");

  $.validator.addMethod("billingZipCode", function(value, element) {
  if (value != "") {
      checkAll();
      return true ;
  } else {
    console.log("Disable 'PLACE ORDER' Button => True");
    return false;
  }
}, "Please enter your Billing Zip Code");

  $.validator.addMethod("checkBox", function(value, element) {
      return true ;
  }, 
  "Please enter your Checkbox"
  );


  $.validator.addMethod("couponCode", function(value, element) {
    if (value === "CB4YE3B3") {
      return true
    } else if (value.length === 0) {
      return true
    } else {
      return false
    }
  }, "Please enter valid coupon");

  zipShip.bind('keyup', function() {
    if (checkAll() != false) {
      placeOrder.removeAttr('disabled');
    }
  })


  $('#input-form').validate({ // initialize the plugin
    debug: false,
    rules: {
      cc:  					{ creditCard: true },
      fname: 				{ firstName: true },
      lname: 				{ lastName: true },
      address: 			{ streetAddress: true },
      zip_ship: 		{ shippingZipCode: true },
      city: 				{ shippingCity: true },
      state: 				{ shippingState: true },
      exp_month:  	{ expirationMonth: true },
      exp_year: 		{ expirationYear: true },
      cvv: 					{ CVV: true },
      zip_pay: 			{ billingZipCode: true },
      checkbox:     { checkBox: true },
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
