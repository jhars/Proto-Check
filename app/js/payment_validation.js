$(document).ready(function () {

// ========================= PLACE ORDER BUTTON ===================== //
  $(window).load(function(){

  });

  $('#l-name').bind('keyup', function() {
      if(allFilled()) {
        $('#checkout-btn').removeAttr('disabled');
      } else {
      }
  });

  function allFilled() {
      var filled = true;
      $('#f-name, #l-name').each(function() {
          if($(this).val() == '') {
            filled = false;
          }
      });
      return filled;
  }
// ========================= PLACE ORDER BUTTON ===================== //



  $.validator.addMethod("creditCard", function(value, element) {
    return (value === "4111");
  }, "Please enter valid credit card number");

  $('#input-form').validate({ // initialize the plugin
    debug: false,
    rules: {
      promo_field: { couponCode: true },
      payment_details_field: { creditCard: true },
      fname: { required: true },
      lname: { required: true },
      address: { required: true },
      zip_ship: { required: true },
      city: { required: true },
      state: { required: true },
      exp: { required: true },
      cvv: { required: true },
      zip_pay: { required: true }
    },
    errorPlacement: function(error, element) {
      console.log(error);
      console.log(element);
      // $('#checkout-btn').disabled;
      $('#error-msg-top').html("THERE IS A PROBLEM WITH YOUR ORDER");
      $('#error-msg-top-subheader').html(" Looks like there’s a problem with some payment information");
      $('#error-label').html(error);
     },
     success: function(error){
      $('#checkout-btn').removeAttr('disabled');
    }
  });


  $.validator.addMethod("couponCode", function(value, element) {
    if (value === "cc") {
      // show pay button
      console.log("show the checkout button");
      $('#checkout-btn').show();
      return true
    } else if (value.length === 0) {
      return true
    } else {
      return false
    }
  }, "Please enter valid coupon");


  $('#promo-form').validate({ // initialize the plugin
    debug: false,
    rules: {
      promo_field: {
        couponCode: true
      }
    },
    errorPlacement: function(error, element) {      
         $('#error-label').html(error);
     }
  });

});
