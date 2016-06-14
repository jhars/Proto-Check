var dress = document.getElementById('dress-thumbnail');
var blouse = document.getElementById('blouse-thumbnail');
var placeOrder = document.getElementById('place-order');

var ctxDress = dress.getContext('2d');
var ctxBlouse = blouse.getContext('2d');
var ctxPlaceOrder = placeOrder.getContext('2d');

$(window).load(function(){
  console.log('load');
    loadImages(sources, function(images) {
    ctxDress.drawImage(images.dress, 0,0,60,80);
    ctxBlouse.drawImage(images.blouse, 0,0,60,80);
    ctxPlaceOrder.drawImage(images.place_order,0,0,520,50);
  });
});

var sources = {
  dress: "../img/thumb_dress.jpg",
  blouse: "../img/thumb_blouse.jpg",
  place_order: "../img/place_order.jpg"
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


$(document).ready(function () {
  $("#place-order").click(function () {
    var promo = document.getElementById('promo-input').value;
    if (promo.length == 0) {
      alert("Please input a promo code");
    }
  });
});
