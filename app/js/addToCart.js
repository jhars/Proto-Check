var dress = document.getElementById('dress');
var blouse = document.getElementById('blouse');
var jeans = document.getElementById('jeans');

var ctxDress = dress.getContext('2d');
var ctxBlouse = blouse.getContext('2d');
var ctxJeans = jeans.getContext('2d');

var sources = {
  dress: "../img/black_dress.jpg",
  blouse: "../img/blouse.jpg",
  jeans: "../img/jeans.jpg"
};

$(window).load(function(){
  console.log('load');
  	loadImages(sources, function(images) {
			ctxDress.drawImage(images.dress, 0, 0, 249, 413);
			ctxBlouse.drawImage(images.blouse, 25, 0, 249, 413);
			ctxJeans.drawImage(images.jeans, 25, 0, 249, 413);
	});
});

var images = {};

function loadImages(sources, callback) {
  var loadedImages = 0;
  var numImages = 0;
  for (var src in sources) {
    numImages++;
  } for (var src in sources) {
    images[src] = new Image();
    images[src].onload = function() {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
};

dress.addEventListener('mouseover', function() {
	drawCartDress();
});
blouse.addEventListener('mouseover', function() {
	drawCartBlouse();
});
jeans.addEventListener('mouseover', function() {
	drawCartJeans();
});
dress.addEventListener('mouseout', function() {
	drawDress();
});
blouse.addEventListener('mouseout', function() {
	drawBlouse();
});
jeans.addEventListener('mouseout', function() {
	drawJeans();
});



function drawDress() {
		ctxDress.drawImage(images.dress, 0, 0, 249, 413);
};

function drawBlouse() {
		ctxBlouse.drawImage(images.blouse, 25, 0, 249, 413);
};

function drawJeans() {
		ctxJeans.drawImage(images.jeans, 25, 0, 249, 413);
};

function drawCartDress() {
	var atc = new Image();
	atc.src = "../img/AddToCart.png"
	ctxDress.drawImage(atc, 150,390, 97, 19);
};

function drawCartBlouse() {
	var atc = new Image();
	atc.src = "../img/AddToCart.png"
	ctxBlouse.drawImage(atc, 150,390, 97, 19);
};

function drawCartJeans() {
	var atc = new Image();
	atc.src = "../img/AddToCart.png"
	ctxJeans.drawImage(atc, 150,390, 97, 19);
};
