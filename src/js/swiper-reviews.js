new Swiper('.reviews-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 28
    }
  }

});