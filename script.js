$(document).ready(function() {
  for (var i = 0; i < 400; i++) {
    $('#container').prepend($('<div class="block"></div>'));
  }
  $('.block').mouseover(function() {
    $(this).css("background-color", "black")
  });
  $('#clear').click(function() {
    var size = prompt("Enter blocks per side (1-100)");
    var pixelSize = 500 / size;
    var numOfBlocks = (500 / pixelSize) * (500 / pixelSize)
    $('.block').css("background-color", "orange")
    $('#container').empty();
    for (var i = 0; i < numOfBlocks; i++) {
      $('#container').prepend($('<div class="block"></div>'));
    }
    $('.block').width(pixelSize);
    $('.block').height(pixelSize);
    $('.block').mouseover(function() {
      $(this).css("background-color", "black")
    });
  });
});
