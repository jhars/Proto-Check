$(document).ready(function () {

  $.validator.addMethod("creditCard", function(value, element) {
    return (value === "4111 1111 1111 1111");
  }, "Please enter valid credit card number");


  $('#main-form').validate({ // initialize the plugin
    debug: false,
    rules: {
      payment_details_field: {
        creditCard: true
      }
    },
    errorPlacement: function(error, element) {      
      $('#error-label').html(error);
     }
  });

});
