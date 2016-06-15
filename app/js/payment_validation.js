$(document).ready(function () {

  $.validator.addMethod("creditCard", function(value, element) {
    return (value === "4");
  }, "Please enter valid credit card number");

  $('#main-form').validate({ // initialize the plugin
    debug: false,
    rules: {
      promo_field: {
        couponCode: true
      },
      payment_details_field: {
        creditCard: true
      },
      fname: {
        required: true
      },
      lname: {
        required: true
      },
      address: {
        required: true
      },
      zip_ship: {
        required: true
      },
      city: {
        required: true
      },
      // state: {
      //   required: true
      // },
      exp: {
        required: true
      },
      cvv: {
        required: true
      },
      zip_pay: {
        required: true
      }
    },
    errorPlacement: function(error, element) {
      console.log(error);
      console.log(element);
      $('#error-msg-top').html(error);
      $('#error-label').html("Type something else diphshit");
     }
  });


  $.validator.addMethod("couponCode", function(value, element) {
    if (value === "CB4YE3B3") {
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
