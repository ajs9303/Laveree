const main = document.querySelector("#main");
const links = document.querySelectorAll("header a");

// main 부분만 변화 => index.html 에 css 연결 필수
const loadPage = async (url, addHistory = true) => {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const newMain = doc.querySelector("main");
    if (!newMain) return;

    main.innerHTML = newMain.innerHTML;

    if (addHistory) history.pushState({ url }, "", url);

    // 새로 로드된 main 내부 링크 처리
    main.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("/laveree/page/")) {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          loadPage(href);
        });
      }
    });

    // shop.html이면 모듈 import 후 초기화
    if (url.includes("/laveree/page/shop.html")) {
      const module = await import("/laveree/js/shop.js");
      if (module.initShop) module.initShop();
    }
  } catch (err) {
    console.error("페이지 로드 에러:", err);
  }
};

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const url = link.href;
    loadPage(url);
  });
});

// 뒤로 가기 / 앞으로 가기
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.url) {
    loadPage(e.state.url, false);
  } else {
    loadPage("/laveree/index.html", false);
  }
});

// sangwon's
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
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
