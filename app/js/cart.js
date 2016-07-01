// $(document).ready(function () {
  $('#promo-input').on('click', function(){
      ctxApplyImg.drawImage(images.apply, 0,0,108,37);
    });

  var myWindow;
  var images = {};
  var sources = {
    dress: "../img/thumb_dress.jpg",
    blouse: "../img/thumb_blouse.jpg",
    recent: "../img/recently_removed.jpg",
    apply: "../img/apply_dark.jpg",
    applied: "../img/apply_white.png"
  };

  var dress = document.getElementById('dress-thumbnail'); var ctxDress = dress.getContext('2d');
  var blouse = document.getElementById('blouse-thumbnail'); var ctxBlouse = blouse.getContext('2d');
  var recent = document.getElementById('recently-removed'); var ctxRecent = recent.getContext('2d');

  var applyImg = document.getElementById('apply-img'); var ctxApplyImg = applyImg.getContext('2d');

  var coupon = $('#promo-input');
  var discountRow = $('#discount-row');
  var totalRow = $('#total-row');
  var totalRowApplied = $('#total-row-applied');

  // ###################### FUNCTONS ###################### //
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
      $('#error-label').html("Please enter valid coupon");
      ctxApplyImg.drawImage(images.apply, 0,0,108,37);
    }
    console.log("APLLIED");
  };

  function checkoutBtnPressed() {
    console.log("APLLYYYYYY");
    if (coupon.val() == "SUMMER") {
      ctxApplyImg.drawImage(images.applied, 0,0,108,37);
      $('#error-label').hide();
      document.location = './checkout_cc_APPLIED.html'
    } else if (!coupon.val()) {
      document.location = './checkout_cc.html'
    } else {
      $('#error-label').show();
      $('#error-label').html("Please enter valid coupon");
      ctxApplyImg.drawImage(images.apply, 0,0,108,37);
    }
    console.log("APLLIED");
  };

  function paypalBtnPressed() {
    console.log("APLLYYYYYY");
    if (coupon.val() == "SUMMER") {
      ctxApplyImg.drawImage(images.applied, 0,0,108,37);
      $('#error-label').hide();
      document.location = './checkout_paypal_APPLIED.html'
    } else if (!coupon.val()) {
      document.location = './checkout_paypal.html'
    } else {
      $('#error-label').show();
      $('#error-label').html("Please enter valid coupon");
      ctxApplyImg.drawImage(images.apply, 0,0,108,37);
    }
    console.log("APLLIED");
  };

  //================ Image Loader ===================//
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
  // =============== ON LOAD ============== //
  $(window).load(function(){
    console.log('load');
    discountRow.hide();
    totalRowApplied.hide();
    loadImages(sources, function(images) {
      ctxDress.drawImage(images.dress, 0,0,120,160);
      ctxBlouse.drawImage(images.blouse, 0,0,120,160);
      ctxRecent.drawImage(images.recent, 0,0,650,333);
    });
  });

  function openWin() {// ++++++++ Pay Pal PopUp ++++++++ //
      myWindow = window.open("", "myWindow", "width=500,height=500,left=500,top=500");
      myWindow.document.write('<img src="../img/bg_paypal.jpg"/><div class="container"><form style="margin-top:-300px; margin-left:150px;"><br><input id="submit" type="submit" name="submit" style="background-color:#0099e5; color:white" value="Thank you for logging in with Paypal" onClick="window.close()"/></form</div>');
  };
  function closeWin() {
    console.log("close the effen window!!");
      myWindow.close();
  };



