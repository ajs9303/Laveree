// hero
const swiperA = new Swiper(".swiperA", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperB = new Swiper(".swiperB", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: Boolean,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
