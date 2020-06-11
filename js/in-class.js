
$(function () {
    $('.service').hide();
    $('.people').hide();

    $('#currency').on('input', function(){
      $('.service').fadeIn(800);
    });

    $('.service').on('input', function(){
      $('.people').fadeIn(800);
    });

    $('.people').on('input', function(){
      $('input:submit').fadeIn(800);
    });
});

