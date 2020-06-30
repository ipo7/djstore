$('.burger').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).toggleClass('burger burger-disable');
  $('.header__menu_disable').toggle(200);

});

$(document).ready(function() {
  $('.video-conference__slider-block').slick({
    dots: false,
    infinite: false,
    speed: 700,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.video-conference__basic-block-container'
  });
});

$('.video-conference__basic-block-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
});






$('.speakers__unit .speakers__focus:first').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).css({
    'background': 'url("./img/circle_active.png") center/cover'
  });

  $('.speakers__unit .speakers__pop-up:first').toggle(200);
});




$('.speakers__unit .speakers__focus:last').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();

  if (window.matchMedia('(max-width: 1530px)').matches) {
    return;
  } else {

    $(this).css({
      'background': 'url("./img/circle_active.png") center/cover'
    });

    $('.speakers__unit .speakers__pop-up:last').toggle(200);
  }
});





$('.speakers__unit .speakers__focus').hover(
  function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).css({
      'background': 'url("./img/circle_active.png") center/cover'
    });
  },

  function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).css({
      'background': 'url("./img/circle.png") center/cover'
    });
  }
);




$('.speakers__unit .speakers__pop-up .pop-up__exit').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();

  $('.speakers__unit .speakers__focus').css({
    'background': 'url("./img/circle.png") center/cover'
  });

  $(this).parent().parent().toggle(200);
});






$('.header__menu .menu__item').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $('.header__menu .menu__item').removeClass('menu__item_active');
  $(this).toggleClass('menu__item_active');
});



$(document).ready(function() {
  $('.header__menu_disable .menu__item .menu__icon_active').toggle();
  $('.header__menu_disable .menu__item:first').addClass('menu__item_active');
  $('.header__menu_disable .menu__item:first img:first').toggle();
  $('.header__menu_disable .menu__item:first img:last').toggle();

});


$('.header__menu_disable .menu__item').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $('.header__menu_disable .menu__item').removeClass('menu__item_active');
  $('.header__menu_disable .menu__item .menu__icon').show();
  $('.header__menu_disable .menu__item .menu__icon_active').hide();

  $('.menu__icon', this).hide();
  $('.menu__icon_active', this).show();


  $(this).toggleClass('menu__item_active');

});






$('.header__callback').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $('.callback-form:not(.callback-form_succses)').toggle(200);
});

$('.basic-block__button-group .button_transparent').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $('.callback-form:not(.callback-form_succses)').toggle(200);
});

$('.callback-form .callback-form__exit').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).parent().toggle(200);
});

$('.callback-form__button').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).parent().toggle();
  $('.callback-form_succses').css("display", "flex");
});

$('.callback-form_succses .callback-form__button').on('click touchend', function(e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).parent().toggle();
});


$(document).click(function(e) {
  if ($(e.target).closest('.pop-up').length) {
    return;
  }
  $('.pop-up').hide();
  $('.speakers__unit .speakers__focus').css({
    'background': 'url("./img/circle.png") center/cover'
  });
});
