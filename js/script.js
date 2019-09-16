$(document).ready(function(){
//BURGER MENU TOGGLE
  $('#burger').click(function(){
    $('.burgerMenu').fadeToggle(200);
  });
  $('#burgerClose').click(function(){
    $('.burgerMenu').fadeToggle(200);
  });

//DEVICE BUTTON TOGGLE

  $('#fdcm').click(function(){
    $('.devices-menus, .devices-menus__fdcm').fadeToggle(200);
  });
  $('#fdcmClose').click(function(){
    $('.devices-menus, .devices-menus__fdcm').fadeToggle(200);
  });


  $('#fdl').click(function(){
    $('.devices-menus, .devices-menus__fdl').fadeToggle(200);
  });
  $('#fdlClose').click(function(){
    $('.devices-menus, .devices-menus__fdl').fadeToggle(200);
  });


  $('#hwa').click(function(){
    $('.devices-menus, .devices-menus__hwa').fadeToggle(200);
  });
  $('#hwaClose').click(function(){
    $('.devices-menus, .devices-menus__hwa').fadeToggle(200);
  });


  $('#hwc').click(function(){
    $('.devices-menus, .devices-menus__hwc').fadeToggle(200);
  });
  $('#hwcClose').click(function(){
    $('.devices-menus, .devices-menus__hwc').fadeToggle(200);
  });


  $('#hws').click(function(){
    $('.devices-menus, .devices-menus__hws').fadeToggle(200);
  });
  $('#hwsClose').click(function(){
    $('.devices-menus, .devices-menus__hws').fadeToggle(200);
  });


  $('#gs').click(function(){
    $('.devices-menus, .devices-menus__gs').fadeToggle(200);
  });
  $('#gsClose').click(function(){
    $('.devices-menus, .devices-menus__gs').fadeToggle(200);
  });

// CAROUSEL SLICK
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
