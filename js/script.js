$(document).ready(function(){
  $('#burger').click(function(){
    $('.burgerMenu').fadeToggle(200);
  });

  $('#close').click(function(){
    $('.burgerMenu').fadeToggle(200);
  });

  $(".rooms__carousel").slick({
    dots: true,
    infinite: true,
    variableWidth: true
  });

  $(".devices__carousel").slick({
    dots: true,
    infinite: true,
    variableWidth: true
  });

  $(".bottomNav__scroll").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true
  });
})
