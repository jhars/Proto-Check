$(document).ready(function () {

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
     },
     submitHandler: function(form) {
      window.location = "checkout.html";
     }
  });



});