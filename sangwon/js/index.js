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

//phone

const phonelefthiddenbox = document.querySelector("#phonelefthiddenbox");
const phoneburger = document.querySelector("#phoneburger");
const phonex = document.querySelector("#phonex");

phoneburger.addEventListener("click", () => {
  phoneburger.classList.toggle("displaynone");
  phonex.classList.toggle("displaynone");
  phonelefthiddenbox.classList.add("boom");
});
phonex.addEventListener("click", () => {
  phoneburger.classList.toggle("displaynone");
  phonex.classList.toggle("displaynone");
  phonelefthiddenbox.classList.remove("boom");
});
