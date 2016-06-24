$(document).ready(function () {
  var itemDetailsPopup = document.getElementById('item-details-popup');
  var jeansMain = document.getElementById('jeans-left');
  var jeansDetails = document.getElementById('jeans-details');
  var YMAL = document.getElementById('you-may-also-like');

  var ctxItemDetailsPopup = itemDetailsPopup.getContext('2d');
  var ctxJeansMain = jeansMain.getContext('2d');
  var ctxJeansDetails = jeansDetails.getContext('2d');
  var ctxYMAL = YMAL.getContext('2d');

  $('.atc-button').click(function() {
    $(this).hide();
    console.log("in your cart");
    // $('.atc-button').className = "in-your-cart";
    $('#in-your-cart').show();
  });

  $(window).load(function(){
    console.log('load');
    $('#in-your-cart').hide();
      loadPopupImages(sourcesPopup, function(images) {
        ctxJeansMain.drawImage(imagesPopup.jeans_main, 0,0,617,834);
        ctxJeansDetails.drawImage(imagesPopup.jeans_details, 0,0,618,487);
        ctxYMAL.drawImage(imagesPopup.you_may_also_like, 0,0,1242,407);
    });
  });

// ================================= IMAGE LOADER ================================= //
  var sourcesPopup = {
    jeans_popup: "../img/thumb_jeans.jpg",
    jeans_main: "../img/PDP/jeans_main.png",
    jeans_primary_details: "../img/PDP/jeans_primary_details.png",
    jeans_details: "../img/PDP/jeans_item_details.png",
    you_may_also_like: "../img/PDP/jeans_ymal.png",
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
