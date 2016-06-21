$(document).ready(function () {
  var coupon = $('#promo-input');
  var discountRow = $('#discount-row');

  var dress = document.getElementById('dress-thumbnail');
  var blouse = document.getElementById('blouse-thumbnail');
  var recent = document.getElementById('recently-removed');

  var ctxDress = dress.getContext('2d');
  var ctxBlouse = blouse.getContext('2d');
  var ctxRecent = recent.getContext('2d');

  $(window).load(function(){
    console.log('load');
      discountRow.hide();
      loadImages(sources, function(images) {
      ctxDress.drawImage(images.dress, 0,0,120,160);
      ctxBlouse.drawImage(images.blouse, 0,0,120,160);
      ctxRecent.drawImage(images.recent, 0,0,650,333);
    });
  });

  var sources = {
    dress: "../img/thumb_dress.jpg",
    blouse: "../img/thumb_blouse.jpg",
    recent: "../img/recently_removed.jpg"
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

  $.validator.addMethod("couponCode", function(value, element) {
    if (value === "SUMMER") {
      coupon.css('background-image',"url('../img/apply_white.png')");
      discountRow.show();
      console.log("background image should apply");
      return true
    } else if (value.length === 0) {
      discountRow.hide();
      coupon.css('background-image',"url('../img/apply_dark.jpg')");
      return true
    } else {
      discountRow.hide();
      coupon.css('background-image',"url('../img/apply_dark.jpg')");
      return false
    }
  }, "Please enter valid coupon");

  $('#promo-form').validate({
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
      window.location = "checkout_cc.html";
     }
  });

});

var myWindow;

function openWin() {
    myWindow = window.open("", "myWindow", "width=500,height=500,left=500,top=500");
    myWindow.document.write('<img src="../img/bg_paypal.jpg"/><div class="container"><form style="margin-top:-300px; margin-left:150px;"><br><input id="submit" type="submit" name="submit" style="background-color:#0099e5; color:white" value="Thank you for logging in with Paypal" onClick="window.close()"/></form</div>');
};

function closeWin() {
  console.log("close the effen window!!");
    myWindow.close();
};