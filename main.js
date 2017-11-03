$(document).ready(function() {
  console.log('Document is loaded.');
  var current = $('content .div1');
  $('body').css('display', 'none');
  $('body').fadeIn('slow');
  $('content .div1').fadeIn('slow');


  $('ul .div1').on('click', function() {
    current = $('content .div1');
    $('content .div1').fadeIn();
    $('content .div2').hide();
    $('content .div3').hide();
  });

  $('ul .div2').on('click', function() {
    $('content .div1').hide();
    current = $('content .div2');
    $('content .div2').fadeIn();
    $('content .div3').hide();
  });

  $('ul .div3').on('click', function() {
    $('content .div1').hide();
    $('content .div2').hide();
    current = $('content .div3');
    $('content .div3').fadeIn();
  });

  $(document).keyup(function(event) {
    var ch = String.fromCharCode(event.which);

    if (event.keyCode === 39) {
      if (parseInt(current.attr("class").slice(3, 4)) < $('#navi ul').children().length) {
        current.hide();
        current.next().fadeIn();
        current = current.next();
      }
    }
    if (event.keyCode === 37) {
      if (parseInt(current.attr("class").slice(3, 4)) > 1) {

        current.hide();
        current.prev().fadeIn();
        current = current.prev();
      }

    }

  });
});