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

});