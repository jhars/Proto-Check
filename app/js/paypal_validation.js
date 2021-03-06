  // $(window).load(function(){

  // });


  // function apply() {
  //   console.log("APLLYYYYYY");
  //   if (coupon.val() == "SUMMER") {
  //     ctxApplyImg.drawImage(images.applied, 0,0,108,37);
  //     discountRow.show();
  //     $('#error-apply').hide();
  //   } else {
  //     $('#error-apply').show();
  //     $('#error-apply').html("Please enter valid coupon");
  //     ctxApplyImg.drawImage(images.apply, 0,0,108,37);
  //   }
  //   console.log("APLLIED");
  // };

// ########################################################### //
// ########################################################### //

	$('#promo-input').on('keyup', function(){
    ctxApplyImg.drawImage(images.apply, 0,0,108,37);
  });

var applyImg = document.getElementById('apply-img'); var ctxApplyImg = applyImg.getContext('2d');

// var applyBtn = document.getElementById('apply-img');
// var ctxApply = applyBtn.getContext('2d');
var coupon = $('#promo-input');
var discountRow = $('#discount-row');

var totalRow = $('#total-row');
var totalRowApplied = $('#total-row-applied');

var errLabel = $('#error-label');
var errMsgTop = $("#error-msg-top");
var errMsgTopSubHeader = $("#error-msg-top-subheader");

function apply() {
  console.log("APLLYYYYYY");
  if (coupon.val() == "SUMMER") {
    ctxApplyImg.drawImage(images.applied, 0,0,108,37);
    $('#error-label').hide();
    discountRow.show();
    totalRow.hide();
    totalRowApplied.show();
  } else {
    totalRow.show();
    discountRow.hide();
    totalRowApplied.hide();
    $('#error-label').show();
    $('#error-apply').html("Please enter valid coupon");
    ctxApplyImg.drawImage(images.apply, 0,0,108,37);
  }
  console.log("APLLIED");
};

$(window).load(function(){
  console.log('load');
  totalRowApplied.hide();
  discountRow.hide();
  $('#checkout-btn').prop('disabled', false);
  checkAll(allFilled);

  loadImages(sources, function(images) {
    // ctxApplyImg.drawImage(images.applied, 0,0,108,37);
  });
});



var sources = {
  dress: "../img/thumb_dress.jpg",
  blouse: "../img/thumb_blouse.jpg",
  recent: "../img/recently_removed.jpg",
  apply: "../img/apply_dark.jpg",
  applied: "../img/apply_white.png"
};
var images = {};
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

  var inputFields = [fname, lname, address, zipShip, city, state];
  var allFilled = true;

  // billingZip.bind('keyup', function() {
  //   enablePaymentButton(allFilled);
  // });

  function enablePaymentButton(bool) {
    if (bool == false) {
      placeOrder.prop('disabled', true);
    } else {
      placeOrder.prop('disabled', false);
    }
  };

  function checkAll(bool) {
    var counter = 6;
    $.each(inputFields, function( index, value ) {
      if ($(this).val() != "") {
        counter --;
        if (counter < 1) {
          allFilled = true;
        } else {
          allFilled = false;
        }
      }
      console.log(counter);
    });
    enablePaymentButton(allFilled);
  };
// checkAll(allFilled);
  fname.bind('keyup', function() {
    checkAll(allFilled);
    // $('#input-form').validate();
  });
  lname.bind('keyup', function() {
    checkAll(allFilled);
  });
  address.bind('keyup', function() {
    checkAll(allFilled);
  });
  zipShip.bind('keyup', function() {
    checkAll(allFilled);
  });
  city.bind('keyup', function() {
    checkAll(allFilled);
  });
  state.bind('keyup', function() {
    checkAll(allFilled);
  });

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
      fname: 				{ firstName: true },
      lname: 				{ lastName: true },
      address: 			{ streetAddress: true },
      zip_ship: 		{ shippingZipCode: true },
      city: 				{ shippingCity: true },
      state: 				{ shippingState: true },
      promo_field:  { couponCode: true}
    },
    errorPlacement: function(error, element) {
      $('#error-label').html(error);
      $("#error-msg-top").html("THERE IS A PROBLEM WITH YOUR ORDER");
      $("#error-msg-top-subheader").html("Looks like there is a problem with your payment Information");
    },
		submitHandler: function(form) {
    	if ((coupon.val() == "SUMMER") || !coupon.val() ) {
    	  document.location = './order_confirmation.html'
    	}
    	placeOrderBtnPushed();
    }
	});
	function placeOrderBtnPushed() {
	  $('#error-apply').html("Please Enter a Valid Coupon");
	  $("#error-msg-top").html("THERE IS A PROBLEM WITH YOUR ORDER");
	  $("#error-msg-top-subheader").html("Looks like there is a problem with your payment Information");
	}
// });




// ########################################################### //
// ########################################################### //
// $(document).ready(function () {
// 		enablePaymentButton(allFilled);

//   var placeOrder = $('#checkout-btn');

//   // $(window).load(function(){
//   //   console.log('load');
//   //   discountRow.hide();
//   //   placeOrder.prop('disabled', false);
//   // });

//   $(window).load(function(){
//     console.log('load');
//     discountRow.show();
//     $('#checkout-btn').prop('disabled', false);
//   });

//   var fname = $('#f-name');
//   var lname = $('#l-name');
//   var address = $('#sublocality');
//   var zipShip = $('#postal_code');
//   var city = $('#locality');
//   var state = $('#administrative_area_level_1');
//   var cardNumber = $('#card-number');
//   var expMonth = $('#exp-month');
//   var expYear = $('#exp-year');
//   var billingZip = $('#zip-pay');
//   var cvv = $('#cvv');

//   var inputFields = [fname, lname, address, zipShip, city, state, cardNumber, expMonth, expYear, cvv, billingZip];
//   var allFilled = false;

//   billingZip.bind('keyup', function() {
//     enablePaymentButton(allFilled);
//   });

//   function enablePaymentButton(bool) {
//     if (bool == false) {
//       placeOrder.prop('disabled', true);
//     } else {
//       placeOrder.prop('disabled', false);
//     }
//   };

//   function checkAll(bool) {
//     var counter = 10;
//     $.each(inputFields, function( index, value ) {
//       if ($(this).val() != "") {
//         counter --;
//         if (counter < 1) {
//           allFilled = true;
//         } else {
//           allFilled = false;
//         }
//         console.log(bool);
//         // enablePaymentButton(bool);
//         console.log(counter);
//       }
//     });
//     enablePaymentButton(allFilled);
//   };

//   billingZip.bind('keyup', function() {
//     checkAll(allFilled);
//   });

//   $.validator.addMethod("creditCard", function(value, element) {
//     if (value === "4111") {
//         console.log("value is 4111, Return True");
//         console.log(inputFields.length);
//         checkAll(allFilled);
//         return true ;
//     } else {
//     	return false;
//     }
//   }, "Sorry but your payment was declined br processor. PLease try another card or contact your card issuer. If this continues please contact support@thredup.com");

//   $.validator.addMethod("firstName", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your first name");

//   $.validator.addMethod("lastName", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your last name");

//   $.validator.addMethod("streetAddress", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your street address");

//   $.validator.addMethod("shippingZipCode", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your shipping zip code");

//   $.validator.addMethod("shippingCity", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your shipping city");

//   $.validator.addMethod("shippingState", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your shipping state");

//   $.validator.addMethod("expirationMonth", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your card expiration month");

//   $.validator.addMethod("expirationYear", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your car expriation year");

//   $.validator.addMethod("CVV", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your Security Code");

//   $.validator.addMethod("billingZipCode", function(value, element) {
//     if (value != "") {
//         checkAll(allFilled);
//         return true ;
//     } else {
//       return false;
//     }
//   }, "Please enter your Billing Zip Code");

//   $.validator.addMethod("couponCode", function(value, element) {
//     if (value === "CB4YE3B3") {
//       return true
//     } else if (value.length === 0) {
//       return true
//     } else {
//       return false
//     }
//   }, "Please enter valid coupon");


//   $('#input-form').validate({ // initialize the plugin
//     debug: false,
//     rules: {
//       cc:  					{ creditCard: true },
//       fname: 				{ firstName: true },
//       lname: 				{ lastName: true },
//       address: 			{ streetAddress: true },
//       zip_ship: 		{ shippingZipCode: true },
//       city: 				{ shippingCity: true },
//       state: 				{ shippingState: true },
//       exp_month:  	{ expirationMonth: true },
//       exp_year: 		{ expirationYear: true },
//       cvv: 					{ CVV: true },
//       zip_pay: 			{ billingZipCode: true },
//       checkbox:     { checkBox: true }
//     },
//     errorPlacement: function(error, element) {
//       $('#error-label').html(error);
//       $("#error-msg-top").html("THERE IS A PROBLEM WITH YOUR ORDER");
//       $("#error-msg-top-subheader").html("Looks like there is a problem with your payment Information");
//     },
// 		submitHandler: function(form) {
//       window.location.replace("order_confirmation.html");
//     }
// 	});
// });
