$(function() {
  // モーダル
  $('.js-signup-show').click(function(){
    $('#signup-modal').fadeIn();
    $('html').addClass("modalset");
  });

  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
    $('html').addClass("modalset");
  });

  $('.js-modal-close').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
    $('html').removeClass('modalset');
  });

  // スライダーメニュー
  let mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 0,
    },
    loop: true,
    speed: 10000,
    slidesPerView:1.8,
    centeredSlides: true,
    centeredSlidesBounds: true
  });

  // アコーディオンメニュー
  $('.faq-list__item').on('click', function () {
    let $answer = $(this).find('.faq-answer');
    let $svg = $(this).find('svg');

    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $svg.removeClass('svg-open');
      $svg.addClass('svg-closed');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $svg.removeClass('svg-closed');
      $svg.addClass('svg-open');
    }
  });
});