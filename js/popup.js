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
  	loadPopupImages(sources, function(images) {
		ctxYMAL.drawImage(imagesPopup.you_may_also_like, 0,0,827,319);
		ctxDressPopup.drawImage(imagesPopup.dress_popup, 0,0,137,183);
		ctxBtnCheckout.drawImage(imagesPopup.checkout, 0,0,316,44);
		ctxBtnContinue.drawImage(imagesPopup.continue, 0,0,316,44);
	});
});

var sourcesPopup = {
	dress_popup: "./img/custom/black_dress-popup.png",
	you_may_also_like: "./img/custom/YouMayAlsoLike.png",
	checkout: "./img/custom/Checkout-Now.png",
	continue: "./img/custom/Continue-Shopping.png"
};

var imagesPopup = {};
function loadPopupImages(sources, callback) {
  var loadedImages = 0;
  var numImages = 0;
  for(var src in sourcesPopup) {
    numImages++;
  } for (var src in sourcesPopup) {
    imagesPopup[src] = new Image();
    imagesPopup[src].onload = function() {
      if(++loadedImages >= numImages) {
        callback(imagesPopup);
      }
    };
    imagesPopup[src].src = sourcesPopup[src];
  }
};


// function youMayAlsoLike() {
// 	ctxYMAL.drawImage(imagesPopup.youMayAlsoLike, 0, 0, 827, 319);
// 	console.log("loaded  You May Also Like Image");
// };

