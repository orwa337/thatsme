$(document).ready(function() {
  console.log('Document is loaded.');
  var current = $('content .div1');
  var currentli = $('#navi ul #active');
  $('body').css('display', 'none');
  $('body').fadeIn('slow');
  $('content .div1').fadeIn('slow');

  $('li').on('click', function() {
    currentClass = $(this).attr("class");
    $('content div').hide();
    currentli.removeAttr('id');
    $(this).attr('id','active');
    currentli = $(this);
    $('content div').each(function(i) {
      if ( $(this).attr("class") == currentClass ) {
        $(this).fadeIn();
        current = $(this);
      }
    });
  });

  $(document).keyup(function(event) {
    var ch = String.fromCharCode(event.which);

    if (event.keyCode === 39) {
      if (parseInt(current.attr("class").slice(3, 4)) < $('#navi ul').children().length) {
        current.hide();
        currentli.removeAttr('id');
        current.next().fadeIn();
        currentli.next().attr('id','active');
        current = current.next();
        currentli = currentli.next();
      }
    }
    if (event.keyCode === 37) {
      if (parseInt(current.attr("class").slice(3, 4)) > 1) {
        current.hide();
        currentli.removeAttr('id');
        current.prev().fadeIn();
        currentli.prev().attr('id','active');
        current = current.prev();
        currentli = currentli.prev();
      }
    }
  });
});