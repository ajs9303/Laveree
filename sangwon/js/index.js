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
  breakpoints: {
    // 768px 이상일 때 적용될 설정 (기본 설정이므로 생략 가능하나 명시적으로 정의)
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // 767.98px 이하일 때 적용될 설정 (최대 767px까지 적용)
    // 모바일 뷰에서는 0px부터 이 설정이 적용됩니다.
    0: {
      slidesPerView: 1,
      spaceBetween: 10, // 모바일에서 슬라이드 간격을 줄일 수 있습니다. (선택 사항)
    },
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
