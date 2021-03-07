$(function() {
  // モーダル
  $('.js-signup-show').click(function(){
    $('#signup-modal').fadeIn();
  });

  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });

  $('.js-modal-close').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  // スライダーメニュー
  let mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 0,
    },
    loop: true,
    speed: 10000,
    slidesPerView:1.5,
    centeredSlides: true
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