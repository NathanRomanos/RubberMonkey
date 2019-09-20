$(document).ready(function(){
//BURGER MENU TOGGLE
  $('.burger').click(function(){
    $('.burgerMenu').fadeToggle(200);
  });
  $('.burgerClose').click(function(){
    $('.burgerMenu').fadeToggle(200);
    $('.burger-menu__list--hidden').hide(200);
  });

  $('.bottomNav__home').click(function(){
    $('.contain').fadeIn(200)
    $('.front-door-contain, .hallway-contain, .garage-contain').fadeOut(200)
  });


// MENU ADD FUNCTIONS
  $('.add').click(function(){
    $('.burger-menu__list--hidden').toggle(200);
  });


  $('.add-d').click(function(){
    $('.add-d-contain, .contain, .burger-menu__list--hidden, .bottomNav').fadeToggle(200);
  });
  $('.add-d-close').click(function(){
    $('.add-d-contain, .contain, .bottomNav').fadeToggle(200);
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



// FRONT DOOR PAGE
  $('.rooms__front-door').click(function(){
    $('.contain, .front-door-contain').fadeToggle(200);
  });
  $('.fd-close').click(function(){
    $('.contain, .front-door-contain').fadeToggle(200);
  });


// HALLWAY PAGE
    $('.rooms__hallway').click(function(){
      $('.contain, .hallway-contain').fadeToggle(200);
    });
    $('.hw-close').click(function(){
      $('.contain, .hallway-contain').fadeToggle(200);
    });

// HALLWAY PAGE
    $('.rooms__garage').click(function(){
      $('.contain, .garage-contain').fadeToggle(200);
    });
    $('.g-close').click(function(){
      $('.contain, .garage-contain').fadeToggle(200);
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
    $('.devices-menus, .devices-menus__fdcb').fadeToggle(200);
  });
  $('.fdcbClose').click(function(){
    $('.devices-menus, .devices-menus__fdcb').fadeToggle(200);
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


// FRONT DOOR CAMERA-A
  $('.devices-menu__fdca--on').click(function(){
    $('.devices-menu__fdca--off, .devices-menu__fdca--on').toggle();
    $('.fdca__off, .fdca__on').toggle();
  });
  $('.devices-menu__fdca--off').click(function(){
    $('.devices-menu__fdca--off, .devices-menu__fdca--on').toggle();
    $('.fdca__off, .fdca__on').toggle();
  });

  $('.fdca__feed').click(function(){
    $('.contain, .fdca-feed-contain').fadeToggle(200);
    $('.bottomNav').hide()
  });
  $('.fdca-feed__close').click(function(){
    $('.contain, .fdca-feed-contain').fadeToggle(200);
    $('.bottomNav').show(1000)
  });


// FRONT DOOR CAMERA-B
  $('.devices-menu__fdcb--on').click(function(){
    $('.devices-menu__fdcb--off, .devices-menu__fdcb--on').toggle();
    $('.fdcb__off, .fdcb__on').toggle();
  });
  $('.devices-menu__fdcb--off').click(function(){
    $('.devices-menu__fdcb--off, .devices-menu__fdcb--on').toggle();
    $('.fdcb__off, .fdcb__on').toggle();
  });

  $('.fdcb__feed').click(function(){
    $('.contain, .front-door-contain, .devices-menus').hide(200);
    $('.fdcb-feed-contain').show(200);
    $('.bottomNav').hide()
  });
  $('.fdcb-feed__close').click(function(){
    $('.contain, .fdcb-feed-contain, .devices-menus').fadeToggle(200);
    $('.bottomNav').show(1000)
  });
  $('.fdcb-room-feed__close').click(function(){
    $('.contain, .fdcb-feed-contain, .devices-menus').fadeToggle(200);
    $('.bottomNav').show(1000)
  });


// HALLWAY CAMERA
    $('.devices-menu__hwc--on').click(function(){
      $('.devices-menu__hwc--off, .devices-menu__hwc--on').toggle();
      $('.hwc__off, .hwc__on').toggle();
    });
    $('.devices-menu__hwc--off').click(function(){
      $('.devices-menu__hwc--off, .devices-menu__hwc--on').toggle();
      $('.hwc__off, .hwc__on').toggle();
    });

    $('.hwc__feed').click(function(){
      $('.contain, .hwc-feed-contain').fadeToggle(200);
      $('.bottomNav').hide()
    });
    $('.hwc-feed__close').click(function(){
      $('.contain, .hwc-feed-contain').fadeToggle(200);
      $('.bottomNav').show(1000)
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
