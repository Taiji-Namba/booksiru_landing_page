$(function() {
  // モーダル
  $('.js-signup-show').click(function(){
    $('#signup-modal').fadeIn();
  });

  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });

  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  // カルーセルメニュー
  const mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 0,
    },
    loop: true,
    speed: 10000,
  });

  // アコーディオンメニュー
  $('.faq-list__item').on('click', function () {
    let $answer = $(this).find('.faq-answer');
    let $svg = $(this).find('svg');

    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $svg.removeClass('svg-closed');
      $svg.addClass('svg-open');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $svg.removeClass('svg-open');
      $svg.addClass('svg-closed');
    }
  });
});