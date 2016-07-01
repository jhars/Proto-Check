$(document).ready(function () {

  $(window).load(function(){
    initiateFormListeners();
    discountRow.hide();
    totalRowApplied.hide();
    loadImages(sources, function(images) {
    });
  });

  var images = {};
  var sources = {
    dress: "../img/thumb_dress.jpg",
    blouse: "../img/thumb_blouse.jpg",
    recent: "../img/recently_removed.jpg",
    apply: "../img/apply_dark.jpg",
    applied: "../img/apply_white.png"
  };

  var applyImg = document.getElementById('apply-img');
  var ctxApplyImg = applyImg.getContext('2d');

  var coupon = $('#promo-input');
  var discountRow = $('#discount-row');

  var errApply = $('#error-apply')
  var errLabel = $('#error-label');
  var errMsgTop = $("#error-msg-top");
  var errMsgTopSubHeader = $("#error-msg-top-subheader");

  var totalRow = $('#total-row');
  var totalRowApplied = $('#total-row-applied');
  var placeOrder = $('#checkout-btn');

  var fname = $('#f-name');
  var lname = $('#l-name');
  var address = $('#sublocality');
  var zipShip = $('#postal_code');
  var city = $('#locality');
  var state = $('#administrative_area_level_1');
  var cardNumber = $('#card-number');
  var expMonth = $('#exp-month');
  var expYear = $('#exp-year');
  var billingZip = $('#zip-pay');
  var cvv = $('#cvv');

  var inputFields = [fname, lname, address, zipShip, city, state, cardNumber, expMonth, expYear, cvv, billingZip];
  var inputFieldHash = {
    cardNumber: "Sorry but your payment was declined br processor. PLease try another card or contact your card issuer. If this continues please contact support@thredup.com",
    fname: "Please enter your first name",
    lname: "Please enter your last name",
    address: "Please enter your street address",
    zipShip: "Please enter your shipping zip code",
    city: "Please enter your shipping city",
    state: "Please enter your shipping state",
    expMonth: "Please enter your card expiration month",
    expYear: "Please enter your car expriation year",
    cvv: "Please enter your Security Code",
    billingZip: "Please enter your Billing Zip Code"
  };

  function apply() {
    console.log("APLLYYYYYY");
    if (coupon.val() == "SUMMER") {
      ctxApplyImg.drawImage(images.applied, 0,0,108,37);
      totalRow.hide(); totalRowApplied.show();
      errLabel.hide();
      discountRow.show();
    } else {
      totalRow.show(); totalRowApplied.hide();
      errLabel.show();
      discountRow.hide();
      errApply.html("Please enter valid coupon");
      ctxApplyImg.drawImage(images.apply, 0,0,108,37);
    }
    console.log("APLLIED");
  };

  function validateCC() {
    if (cardNumber.val() == "4111") {
      window.location.replace("order_confirmation.html");
    } else {
      placeOrderCCError();
    }
  };

  var allInputsFilled = false

  function initiateFormListeners() {
    $.each(inputFields, function(index, value) {
      value.on('keyup', function() {
        checkIfAllInputFieldsComplete();
      });
    });
  };

  function checkIfAllInputFieldsComplete() {
    $.each(inputFields, function(index, value) {
      var inputText = value.val()
      if (!inputText) {
        allInputsFilled = false
        placeOrder.prop('disabled', true);
        console.log("The " + index + " field is NOT filled in, Value: " + inputText );
      } else {
        allInputsFilled = true
        placeOrder.prop('disabled', false);
        console.log("The " + index + " Field IS FILLED IN, Value: " + inputText );
      }
    });
    console.log("All Fields Have a Value");
    return allInputsFilled
  };

  function loadImages(sources, callback) {
    var loadedImages = 0;
    var numImages = 0;
    for(var src in sources) {
      numImages++;
    } for (var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
  };

  function placeOrderCCError() {
    errMsgTop.html("THERE IS A PROBLEM WITH YOUR ORDER");
    errMsgTopSubHeader.html("Looks like there is a problem with your payment Information");
  };

  function promoPasses() {
    if ((coupon.val() == "SUMMER") || !coupon.val() || coupon.val() == "") {
      return true
    } else {
      errApply.html("Please Enter a Valid Coupon");
      return false
    }
  };

});
