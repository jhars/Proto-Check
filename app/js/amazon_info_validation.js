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

var applyBtn = document.getElementById('apply-img');
var ctxApply = applyBtn.getContext('2d');


function apply() {
  console.log("APLLYYYYYY");
  if (coupon.val() == "SUMMER") {
    ctxApply.drawImage(images.applied, 0,0,108,37);
    $('#error-apply').hide();
  } else {
    $('#error-apply').show();
    $('#error-apply').html("Please enter valid coupon");
    ctxApply.drawImage(images.apply, 0,0,108,37);
  }
  console.log("APLLIED");
};
// ============= Images =================== //

//================ Image Loader ===================//
var sources = {
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
    ctxApply.drawImage(images.apply, 0,0,108,37);
  });
});
