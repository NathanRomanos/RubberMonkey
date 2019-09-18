$(document).ready(function(){
//BURGER MENU TOGGLE
  $('.burger').click(function(){
    $('.burgerMenu').fadeToggle(200);
  });
  $('.burgerClose').click(function(){
    $('.burgerMenu').fadeToggle(200);
    $('.burger-menu__list--hidden').hide(200);
  });


// MENU ADD FUNCTIONS
  $('.add').click(function(){
    $('.burger-menu__list--hidden').toggle(200);
  });


  $('.add-d').click(function(){
    $('.add-d-contain').fadeToggle(200);
    $('.contain').fadeToggle(200);
    $('.burger-menu__list--hidden').fadeToggle(200);
  });
  $('.add-d-close').click(function(){
    $('.add-d-contain').fadeToggle(200);
    $('.contain').fadeToggle(200);
    $('.burgerMenu').hide();
  });


//MENU SETTINGS FUNCTIONS
  $('.settings').click(function(){
    $('.settings-contain').fadeToggle(200);
    $('.contain').fadeToggle(200);
    $('.burger-menu__list--hidden').hide(200);
  });
  $('.settings-close').click(function(){
    $('.settings-contain').fadeToggle(200);
    $('.contain').fadeToggle(200);
    $('.burgerMenu').hide();
  });



// ROOMS VIEW ALL FUNCTIONS
  $('.rooms__titles--view-all, .rooms__titles--view-less').click(function(){
    $('.rooms__hidden, .rooms__carousel').toggle(200);
    $('.rooms__titles--view-all, .rooms__titles--view-less').toggle();
  });



// DEVICES VIEW ALL FUNCTIONS
    $('.devices__titles--view-all, .devices__titles--view-less').click(function(){
      $('.devices__hidden, .devices__carousel').toggle(200);
      $('.devices__titles--view-all, .devices__titles--view-less').toggle();
    });



//DEVICE BUTTON TOGGLE
  $('.fdca').click(function(){
    $('.devices-menus, .devices-menus__fdca').fadeToggle(200);
  });
  $('.fdcaClose').click(function(){
    $('.devices-menus, .devices-menus__fdca').fadeToggle(200);
  });


  $('.fdcb').click(function(){
    $('.devices-menus, .devices-menus__fdca').fadeToggle(200);
  });
  $('.fdcbClose').click(function(){
    $('.devices-menus, .devices-menus__fdca').fadeToggle(200);
  });


  $('.fdl').click(function(){
    $('.devices-menus, .devices-menus__fdl').fadeToggle(200);
  });
  $('.fdlClose').click(function(){
    $('.devices-menus, .devices-menus__fdl').fadeToggle(200);
  });


  $('.hwa').click(function(){
    $('.devices-menus, .devices-menus__hwa').fadeToggle(200);
  });
  $('.hwaClose').click(function(){
    $('.devices-menus, .devices-menus__hwa').fadeToggle(200);
  });


  $('.hwc').click(function(){
    $('.devices-menus, .devices-menus__hwc').fadeToggle(200);
  });
  $('.hwcClose').click(function(){
    $('.devices-menus, .devices-menus__hwc').fadeToggle(200);
  });


  $('.hws').click(function(){
    $('.devices-menus, .devices-menus__hws').fadeToggle(200);
  });
  $('.hwsClose').click(function(){
    $('.devices-menus, .devices-menus__hws').fadeToggle(200);
  });


  $('.gs').click(function(){
    $('.devices-menus, .devices-menus__gs').fadeToggle(200);
  });
  $('.gsClose').click(function(){
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
