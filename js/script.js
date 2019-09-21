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
    $('.settings-contain, .contain, .burgerMenu').fadeToggle(200);
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
    $('.fdl__lock-password').hide();
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
    $('.hws__lock-password').hide();
  });


  $('.gs').click(function(){
    $('.devices-menus, .devices-menus__gs').fadeToggle(200);
  });
  $('.gsClose').click(function(){
    $('.devices-menus, .devices-menus__gs').fadeToggle(200);
    $('.gs__lock-password').hide();
  });


// FRONT DOOR CAMERA-A
  $('.devices-menu__fdca--on').click(function(){
    $('.fdca__record, .fdca__on, .devices-menu__fdca-record--on, .devices-menu__fdca--on').hide();
    $('.fdca__off, .devices-menu__fdca-record--off, .devices-menu__fdca--off').show();
  });
  $('.devices-menu__fdca--off').click(function(){
    $('.devices-menu__fdca--on, .fdca__on').show();
    $('.devices-menu__fdca--off, .fdca__off').hide();
  });
  $('.devices-menu__fdca-record--off').click(function(){
    $('.devices-menu__fdca-record--off, .devices-menu__fdca-record--on').toggle();
    $('.fdca__off, .fdca__on, .devices-menu__fdca--off').hide();
    $('.fdca__record, .devices-menu__fdca--on').show();
  });
  $('.devices-menu__fdca-record--on').click(function(){
    $('.devices-menu__fdca-record--off, .devices-menu__fdca-record--on').toggle();
    $('.fdca__record').hide();
    $('.fdca__on').show();
  });

  $('.fdca__feed').click(function(){
    $('.devices-menus__fdca, .fdca-feed-contain').fadeToggle(200);
    $('.bottomNav').hide()
  });
  $('.fdca-feed__close').click(function(){
    $('.devices-menus__fdca, .fdca-feed-contain').fadeToggle(200);
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
    $('.devices-menus__fdcb, .fdcb-feed-contain').fadeToggle(200);
    $('.bottomNav').hide()
  });
  $('.fdcb-feed__close').click(function(){
    $('.devices-menus__fdcb, .fdcb-feed-contain').fadeToggle(200);
    $('.bottomNav').show(1000)
  });


// FRONT DOOR LOCK
  $('.devices-menu__fdl--off, .devices-menu__fdl--on').click(function(){
    $('.fdl__lock-password').toggle(200);
  });
  $('.fdl__lock-close').click(function(){
    $('.fdl__lock-password').toggle(200);
  });
  $('.fdl__lock-form').submit(function(){
    $('.devices-menu__fdl--off, .devices-menu__fdl--on').toggle();
    $('.fdl__off, .fdl__on, .fdl__lock-password').toggle(200);
  });

  $('.devices-menu__fdl-alert--off, .devices-menu__fdl-alert--on').click(function(){
    $('.fdl__alert-password').toggle(200);
  });
  $('.fdl__alert-close').click(function(){
    $('.fdl__alert-password').toggle(200);
  });
  $('.fdl__alert-form').submit(function(){
    $('.devices-menu__fdl-alert--off, .devices-menu__fdl-alert--on').toggle();
    $('.fdl__alert-password').toggle(200);
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
      $('.devices-menus__hwc, .hwc-feed-contain').fadeToggle(200);
      $('.bottomNav').hide()
    });
    $('.hwc-feed__close').click(function(){
      $('.devices-menus__hwc, .hwc-feed-contain').fadeToggle(200);
      $('.bottomNav').show(1000)
    });


// HALLWAY SENSOR
  $('.devices-menu__hws--off, .devices-menu__hws--on').click(function(){
    $('.hws__lock-password').toggle(200);
  });
  $('.hws__lock-close').click(function(){
    $('.hws__lock-password').toggle(200);
  });
  $('.hws__lock-form').submit(function(){
    $('.devices-menu__hws--off, .devices-menu__hws--on').toggle();
    $('.hws__off, .hws__on, .hws__lock-password').toggle(200);
  });

  $('.devices-menu__hws-alert--off, .devices-menu__hws-alert--on').click(function(){
    $('.hws__alert-password').toggle(200);
  });
  $('.hws__alert-close').click(function(){
    $('.hws__alert-password').toggle(200);
  });
  $('.hws__alert-form').submit(function(){
    $('.devices-menu__hws-alert--off, .devices-menu__hws-alert--on').toggle();
    $('hws__alert-password').toggle(200);
  });


// GARAGE SENSOR
  $('.devices-menu__gs--off, .devices-menu__gs--on').click(function(){
    $('.gs__lock-password').toggle(200);
  });
  $('.gs__lock-close').click(function(){
    $('.gs__lock-password').toggle(200);
  });
  $('.gs__lock-form').submit(function(){
    $('.devices-menu__gs--off, .devices-menu__gs--on').toggle();
    $('.gs__off, .gs__on, .gs__lock-password').toggle(200);
  });

  $('.devices-menu__gs-alert--off, .devices-menu__gs-alert--on').click(function(){
    $('.gs__alert-password').toggle(200);
  });
  $('.gs__alert-close').click(function(){
    $('.gs__alert-password').toggle(200);
  });
  $('.gs__alert-form').submit(function(){
    $('.devices-menu__gs-alert--off, .devices-menu__gs-alert--on').toggle();
    $('gs__alert-password').toggle(200);
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
