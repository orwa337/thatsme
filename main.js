$(document).ready(function() {
  console.log('Document is loaded.');
  var current = $('#div1');
  $('body').css('display', 'none');
  $('body').fadeIn('slow');
  $('#div1').fadeIn('slow');
  /*
  function mycurrent($('li')) {
    current.attr('id') = $('li').attr('class');
  } 

  $(this).on('click' , function() {
    mycurrent($(this));
    $('div').hide();
    current.fadeIn();
  });
  */
 
  $('.div1').on('click', function() {
    current = $('#div1');
    $('#div1').fadeIn();
    $('#div2').hide();
    $('#div3').hide();
  });

  $('.div2').on('click', function() {
    $('#div1').hide();
    current = $('#div2');
    $('#div2').fadeIn();
    $('#div3').hide();
  });

  $('.div3').on('click', function() {
    $('#div1').hide();
    $('#div2').hide();
    current = $('#div3');
    $('#div3').fadeIn();
  });
  
  $(document).keyup(function(event) {
    var ch = String.fromCharCode(event.which);

    if (event.keyCode === 39) {
      if (parseInt(current.attr("id").slice(3, 4)) < $('#navi ul').children().length) {
        current.hide();
        current.next().fadeIn();
        current = current.next();
      }
    }
    if (event.keyCode === 37) {
      if (parseInt(current.attr("id").slice(3, 4)) > 1) {

        current.hide();
        current.prev().fadeIn();
        current = current.prev();
      }

    }

  });
});