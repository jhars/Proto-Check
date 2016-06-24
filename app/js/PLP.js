$(document).ready(function () {

  var dress = document.getElementById('dress');
  var blouse = document.getElementById('blouse');
  var jeans = document.getElementById('jeans');
  var tank = document.getElementById('tank');

  var ctxDress = dress.getContext('2d');
  var ctxBlouse = blouse.getContext('2d');
  var ctxJeans = jeans.getContext('2d');
  var ctxTank = tank.getContext('2d');

  var dressAtcBtn = document.getElementById("#dress-atc");
  var blouseAtcBtn = document.getElementById("#blouse-atc");
  var jeansAtcBtn = document.getElementById("#jeans-atc");
  var tankAtcBtn = document.getElementById("#tank-atc");


  var sources = {
    dress: "../img/black_dress.jpg",
    blouse: "../img/blouse.jpg",
    jeans: "../img/jeans.jpg",
    tank: "../img/tank.jpg"
  };

  $(window).load(function(){
    console.log('load');
    $("#dress-atc").hide();
    $("#blouse-atc").hide();
    $("#jeans-atc").hide();
    $("#tank-atc").hide();
    	loadImages(sources, function(images) {
  			ctxDress.drawImage(images.dress, 0, 0, 180, 299);
        ctxBlouse.drawImage(images.blouse, 0, 0, 180, 299);
        ctxJeans.drawImage(images.jeans, 0, 0, 180, 299);
        ctxTank.drawImage(images.tank, 0, 0, 180, 299);
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


  $('#dress').hover(function() {$('#dress-atc').show()});
  $('#item-container').hover(function() {}, function() {$('#dress-atc').hide()});
    $('#dress').hover(function() {}, function() {
    $('#jeans-atc').hide();
    $('#blouse-atc').hide();
    $('#tank-atc').hide();
  });

  $('#blouse').hover(function() {$('#blouse-atc').show()});
  $('#item-container').hover(function() {}, function() {$('#blouse-atc').hide()});
  $('#blouse').hover(function() {}, function() {
    $('#jeans-atc').hide();
    $('#dress-atc').hide();
    $('#tank-atc').hide();
  });

  $('#jeans').hover(function() {$('#jeans-atc').show()});
  $('#item-container').hover(function() {}, function() {$('#jeans-atc').hide()});
  $('#jeans').hover(function() {}, function() {
    $('#dress-atc').hide();
    $('#blouse-atc').hide();
    $('#tank-atc').hide();
  });

  $('#tank').hover(function() {$('#tank-atc').show()});
  $('#item-container').hover(function() {}, function() {$('#tank-atc').hide()});
  $('#tank').hover(function() {}, function() {
    $('#jeans-atc').hide();
    $('#blouse-atc').hide();
    $('#dress-atc').hide();
  });


});