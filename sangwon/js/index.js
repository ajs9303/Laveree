// hero
const swiperA = new Swiper(".swiperA", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination-A",
    clickable: true,
  },
});
const swiperB = new Swiper(".swiperB", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: Boolean,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
