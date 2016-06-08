// window.addEventListener('load', initControl, false);
document.addEventListener('mouseover', function() {
		console.log("event listener Added!")
		drawCart()
	});

var canvasItems = document.getElementById('dress');
var contextItems = canvasItems.getContext('2d');



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



function initControl() {
	canvasItems.addEventListener('mouseover', function() {
		console.log("event listener Added!")
		drawCart()
	});
	loadImages(sources, function(images) {
		contextItems.drawImage(images.dress, 0, 0, 249, 413);
	});
};
	
function drawCart() {
	var atc = new Image();
	atc.src = "./img/custom/AddToCart.png"
	contextItems.drawImage(atc, 150,390, 97, 19);
}


