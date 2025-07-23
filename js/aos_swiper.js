AOS.init();

//swiper

var swiper = new Swiper(".banner_swiper", {
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 4000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
    loop: true,
  },
  mousewheel: true,
  keyboard: true,
});
