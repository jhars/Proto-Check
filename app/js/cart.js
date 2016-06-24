var myWindow;
function openWin() {
    myWindow = window.open("", "myWindow", "width=500,height=500,left=500,top=500");
    myWindow.document.write('<img src="../img/bg_paypal.jpg"/><div class="container"><form style="margin-top:-300px; margin-left:150px;"><br><input id="submit" type="submit" name="submit" style="background-color:#0099e5; color:white" value="Thank you for logging in with Paypal" onClick="window.close()"/></form</div>');
};
function closeWin() {
  console.log("close the effen window!!");
    myWindow.close();
};
var coupon = $('#promo-input');
var discountRow = $('#discount-row');

var dress = document.getElementById('dress-thumbnail'); var ctxDress = dress.getContext('2d');
var blouse = document.getElementById('blouse-thumbnail'); var ctxBlouse = blouse.getContext('2d');
var recent = document.getElementById('recently-removed'); var ctxRecent = recent.getContext('2d');

var applyBtn = document.getElementById('apply-img');
var ctxApply = applyBtn.getContext('2d');


function apply() {
  console.log("APLLYYYYYY");
  if (coupon.val() == "SUMMER") {
    ctxApply.drawImage(images.applied, 0,0,108,37);
    $('#error-label').hide();
  } else {
    $('#error-label').show();
    $('#error-label').html("Please enter valid coupon");
    ctxApply.drawImage(images.apply, 0,0,108,37);
  }
  console.log("APLLIED");
};
// ============= Images =================== //

//================ Image Loader ===================//
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
// =============== ON LOAD ============== //
$(window).load(function(){
  console.log('load');
  discountRow.hide();
  loadImages(sources, function(images) {
    ctxDress.drawImage(images.dress, 0,0,120,160);
    ctxBlouse.drawImage(images.blouse, 0,0,120,160);
    ctxRecent.drawImage(images.recent, 0,0,650,333);
    ctxApply.drawImage(images.apply, 0,0,108,37);
  });
});
