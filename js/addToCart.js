
sources = {
	dress: "./img/custom/black_dress.jpg"
}

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
}
var canvasItems = document.getElementById('dress');
var contextItems = canvasItems.getContext('2d');

loadImages(sources, function(images) {
	contextItems.drawImage(images.dress, 0, 0, 249, 413)
});
document.getElementById('dress').addEventListener('mouseover', function() {
  var canvas = document.getElementById('dress');
  var context = canvas.getContext('2d');
  // =========== CHANGE IMAGE IN AND OUT HERE ===========//
  var atc = new Image();
  atc.src = "./img/custom/AddToCart.png"
  contextItems.drawImage(atc, 150,390, 97, 19);
});