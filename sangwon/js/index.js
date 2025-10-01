const title = document.querySelectorAll(".hiddentitle");
const BRAND = document.querySelector("#BRAND");
const SHOP = document.querySelector("#SHOP");
const MAGAZINE = document.querySelector("#MAGAZINE");
const COMMUNITY = document.querySelector("#COMMUNITY");
const STORE = document.querySelector("#STORE");

title.forEach((title) => {
  BRAND.addEventListener("mouseover", () => {
    title.classList.remove("hiddentitle");
  });
});

// BRAND.addEventListener("mouseover", () => {
//   BRAND.classList.remove("hiddentitle");
//   SHOP.classList.remove("hiddentitle");
//   BRAND.classList.remove("hiddentitle");
//   BRAND.classList.remove("hiddentitle");
//   BRAND.classList.remove("hiddentitle");
// });

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
