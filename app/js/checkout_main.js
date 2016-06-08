var dress = document.getElementById('dress-thumbnail');
var blouse = document.getElementById('blouse-thumbnail');
var recent = document.getElementById('recently-removed');
var ctxDress = dress.getContext('2d');
var ctxBlouse = blouse.getContext('2d');
var ctxRecent = recent.getContext('2d');

$(window).load(function(){
  console.log('load');
    loadImages(sources, function(images) {
    ctxDress.drawImage(images.dress, 0,0,120,160);
    ctxBlouse.drawImage(images.blouse, 0,0,120,160);
    ctxRecent.drawImage(images.recent, 0,0,650,333);
  });
});

var sources = {
  dress: "../img/thumb-dress.jpg",
  blouse: "../img/thumb-blouse.jpg",
  recent: "../img/recently_removed.jpg"
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