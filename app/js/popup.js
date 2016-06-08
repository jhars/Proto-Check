var YMAL = document.getElementById('you-may-also-like');
var dressPopup = document.getElementById('dress-popup');
var btnCheckout = document.getElementById('btn-checkout');
var btnContinue = document.getElementById('btn-continue');

var ctxYMAL = YMAL.getContext('2d');
var ctxDressPopup = dressPopup.getContext('2d');
var ctxBtnCheckout = btnCheckout.getContext('2d');
var ctxBtnContinue = btnContinue.getContext('2d');



$(window).load(function(){
  console.log('load');
  	loadPopupImages(sourcesPopup, function(images) {
		ctxYMAL.drawImage(imagesPopup.you_may_also_like, 0,0,827,319);
		ctxDressPopup.drawImage(imagesPopup.dress_popup, 0,0,137,183);
		ctxBtnCheckout.drawImage(imagesPopup.checkout, 0,0,316,44);
		ctxBtnContinue.drawImage(imagesPopup.continue, 0,0,316,44);
	});
});

var sourcesPopup = {
	dress_popup: "../img/black_dress-popup.png",
	you_may_also_like: "../img/YouMayAlsoLike.png",
	checkout: "../img/Checkout-Now.png",
	continue: "../img/Continue-Shopping.png"
};

var imagesPopup = {};
function loadPopupImages(sources, callback) {
  var loadedImages = 0;
  var numImages = 0;
  for(var src in sources) {
    numImages++;
  } for (var src in sources) {
    imagesPopup[src] = new Image();
    imagesPopup[src].onload = function() {
      if(++loadedImages >= numImages) {
        callback(imagesPopup);
      }
    };
    imagesPopup[src].src = sources[src];
  }
};
