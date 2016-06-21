$(document).ready(function () {
  var placeOrder = $('#checkout-btn');
  var coupon = $('#promo-input');

  var fname = $('#f-name');
  var lname = $('#l-name');
  var address = $('#sublocality');
  var zipShip = $('#postal_code');
  var city = $('#locality');
  var state = $('#administrative_area_level_1');

  var inputFields = [fname, lname, address, zipShip, city, state];
  var allFilled = false;

  state.bind('keyup', function() {
    enablePaymentButton(allFilled);
  });

  state.bind('keyup', function() {
    checkAll(allFilled);
  });


  function enablePaymentButton(bool) {
    if (bool == false) {
      placeOrder.prop('disabled', true);
    } else {
      placeOrder.prop('disabled', false);
    }
  };

  function checkAll(bool) {
    var counter = 5;
    $.each(inputFields, function( index, value ) {
      if ($(this).val() != "") {
        counter --;
        if (counter < 1) {
          allFilled = true;
        } else {
          allFilled = false;
        }
        console.log(bool);
        // enablePaymentButton(bool);
        console.log(counter);
      }
    });
    enablePaymentButton(allFilled);
  };


  $.validator.addMethod("creditCard", function(value, element) {
    if (value === "4111") {
        console.log("value is 4111, Return True");
        console.log(inputFields.length);
        checkAll(allFilled);
        return true ;
    } else {
      return false;
    }
  }, "Sorry but your payment was declined br processor. PLease try another card or contact your card issuer. If this continues please contact support@thredup.com");

  $.validator.addMethod("firstName", function(value, element) {
    if (value != "") {
        checkAll(allFilled);
        return true ;
    } else {
      return false;
    }
  }, "Please enter your first name");

  $.validator.addMethod("lastName", function(value, element) {
    if (value != "") {
        checkAll(allFilled);
        return true ;
    } else {
      return false;
    }
  }, "Please enter your last name");

  $.validator.addMethod("streetAddress", function(value, element) {
    if (value != "") {
        checkAll(allFilled);
        return true ;
    } else {
      return false;
    }
  }, "Please enter your street address");

  $.validator.addMethod("shippingZipCode", function(value, element) {
    if (value != "") {
        checkAll(allFilled);
        return true ;
    } else {
      return false;
    }
  }, "Please enter your shipping zip code");

  $.validator.addMethod("shippingCity", function(value, element) {
    if (value != "") {
        checkAll(allFilled);
        return true ;
    } else {
      return false;
    }
  }, "Please enter your shipping city");

  $.validator.addMethod("shippingState", function(value, element) {
    if (value != "") {
        checkAll(allFilled);
        return true ;
    } else {
      return false;
    }
  }, "Please enter your shipping state");

  $.validator.addMethod("couponCode", function(value, element) {
    if (value === "SUMMER") {
      coupon.css('background-image',"url('../img/apply_white.png')");
      console.log("background image should apply");
      return true
    } else if (value.length === 0) {
      coupon.css('background-image',"url('../img/apply_dark.jpg')");
      return true
    } else {
      coupon.css('background-image',"url('../img/apply_dark.jpg')");
      return false
    }
  }, "Please enter valid coupon");


  $('#input-form').validate({ // initialize the plugin
    debug: false,
    rules: {
      cc:           { creditCard: true },
      fname:        { firstName: true },
      lname:        { lastName: true },
      address:      { streetAddress: true },
      zip_ship:     { shippingZipCode: true },
      city:         { shippingCity: true },
      state:        { shippingState: true },
      checkbox:     { checkBox: true },
      promo_field:  { couponCode: true}
    },
    errorPlacement: function(error, element) {
      $('#error-label').html(error);
      $("#error-msg-top").html("THERE IS A PROBLEM WITH YOUR ORDER");
      $("#error-msg-top-subheader").html("Looks like there is a problem with your payment Information");
    },
    submitHandler: function(form) {
      window.open("https://www.google.com");
    }

  });

});

var payPalWindow;
function openWin() {
  console.log("OPEN WINDOW!!");
    payPalWindow = window.open("", "payPalWindow", "width=500,height=500,left=500,top=500");
    payPalWindow.document.write('<img src="../img/bg_paypal.jpg"/><div class="container"><form style="margin-top:-300px; margin-left:150px;"><br><input id="submit" type="submit" name="submit" style="background-color:#0099e5; color:white" value="Thank you for logging in with Paypal" onClick="window.close()"/></form</div>');
}
function closeWin() {
  console.log("close the effen window!!");
    myWindow.close();
}