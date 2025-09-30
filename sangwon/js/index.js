// hero
var swiperA = new Swiper(".swiperA", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination-A",
    clickable: true,
  },
});
var swiperB = new Swiper(".swiperB", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination-B",
    clickable: true,
  },
});
