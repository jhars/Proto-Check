$(document).ready(function () {

  var YMAL = document.getElementById('you-may-also-like');
  var itemPopup = document.getElementById('item-popup');
  var itemDetailsPopup = document.getElementById('item-details-popup');
  var btnCheckout = document.getElementById('btn-checkout');
  var btnContinue = document.getElementById('btn-continue');

  var ctxItemPopup = itemPopup.getContext('2d');
  var ctxItemDetailsPopup = itemDetailsPopup.getContext('2d');
  var ctxYMAL = YMAL.getContext('2d');
  var ctxBtnCheckout = btnCheckout.getContext('2d');
  var ctxBtnContinue = btnContinue.getContext('2d');

  $(window).load(function(){
    console.log('load');
      loadPopupImages(sourcesPopup, function(images) {
        ctxYMAL.drawImage(imagesPopup.you_may_also_like, 0,0,827,319);
        ctxBtnCheckout.drawImage(imagesPopup.checkout, 0,0,316,44);
        ctxBtnContinue.drawImage(imagesPopup.continue, 0,0,316,44);

        $('#dress-atc').click(function() {
          ctxItemPopup.drawImage(imagesPopup.dress_popup, 0,0,137,183);
          ctxItemDetailsPopup.drawImage(imagesPopup.dress_details, 0,0,93,65);
          console.log("draw dress thumbnail");
        });
        $('#blouse-atc').click(function() {
          ctxItemPopup.drawImage(imagesPopup.blouse_popup, 0,0,137,183);
          ctxItemDetailsPopup.drawImage(imagesPopup.blouse_details, 0,0,93,65);
          console.log("draw dress thumbnail");
        });
        $('#jeans-atc').click(function() {
          ctxItemPopup.drawImage(imagesPopup.jeans_popup, 0,0,137,183);
          ctxItemDetailsPopup.drawImage(imagesPopup.jeans_details, 0,0,93,65);
          console.log("draw dress thumbnail");
        });
        $('#tank-atc').click(function() {
          ctxItemPopup.drawImage(imagesPopup.tank_popup, 0,0,137,183);
          ctxItemDetailsPopup.drawImage(imagesPopup.tank_details, 0,0,93,65);
          console.log("draw tank thumbnail");
        });
    });
  });

// ================================= IMAGE LOADER ================================= //
  var sourcesPopup = {
    dress_popup: "../img/thumb_dress.jpg",
    blouse_popup: "../img/thumb_blouse.jpg",
    jeans_popup: "../img/thumb_jeans.jpg",
    tank_popup: "../img/thumb_tank.jpg",
    dress_details: "../img/dress-details.png",
    blouse_details: "../img/blouse-details.png",
    jeans_details: "../img/jeans-details.png",
    tank_details: "../img/tank-details.png",
    you_may_also_like: "../img/YouMayAlsoLike.png",
    checkout: "../img/Checkout-Now.png",
    continue: "../img/Continue-Shopping.png"
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
// ================================= IMAGE LOADER ================================= //
});
