const main = document.querySelector("#main");
const aside = document.querySelector(".aside");
const moduleCache = {};

aside.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "auto" });
});

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
    window.scrollTo({ top: 0, behavior: "auto" });

    // history 추가
    if (addHistory) history.pushState({ url }, "", url);

    // main 내부 a태그 처리
    main.querySelectorAll("a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("/Laveree/")) {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          loadPage(href);
        });
      }
    });

    // 페이지별 모듈 초기화
    if (url.includes("/Laveree/index.html")) {
      if (!moduleCache.index) {
        moduleCache.index = await import("/Laveree/js/index.js");
      }
      moduleCache.index.initIndex?.();
    } else if (url.includes("/Laveree/page/shop_all.html")) {
      if (!moduleCache.shop) {
        moduleCache.shop = await import("/Laveree/js/shop.js");
      }
      moduleCache.shop.initShop?.("ALL");
    } else if (url.includes("/Laveree/page/shop_acc.html")) {
      if (!moduleCache.shop) {
        moduleCache.shop = await import("/Laveree/js/shop.js");
      }
      moduleCache.shop.initShop?.("ACC");
    } else if (url.includes("/Laveree/page/shop_detergent.html")) {
      if (!moduleCache.shop) {
        moduleCache.shop = await import("/Laveree/js/shop.js");
      }
      moduleCache.shop.initShop?.("DETERGENT");
    } else if (url.includes("/Laveree/page/shop_gift.html")) {
      if (!moduleCache.shop) {
        moduleCache.shop = await import("/Laveree/js/shop.js");
      }
      moduleCache.shop.initShop?.("GIFT");
    } else if (url.includes("/Laveree/page/shop_remover.html")) {
      if (!moduleCache.shop) {
        moduleCache.shop = await import("/Laveree/js/shop.js");
      }
      moduleCache.shop.initShop?.("REMOVER");
    }
  } catch (err) {
    console.error("페이지 로드 에러:", err);
  }
};

// 전체 a 태그 처리
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(`눌린것: ${link}`);
    e.preventDefault();
    const url = new URL(link.href).pathname;
    if (url === location.pathname) return;
    loadPage(url);
  });
});

// 맨 처음 실행
window.addEventListener("DOMContentLoaded", () => {
  loadPage(location.pathname, false);
});

// 뒤로 가기 / 앞으로 가기
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.url) {
    loadPage(e.state.url, false);
  } else {
    loadPage("/Laveree/index.html", false);
  }

  window.scrollTo({ top: 0, behavior: "auto" });
});

// sangwon's
// hero
export const initIndex = () => {
  new Swiper(".swiperA", {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".swiperB", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: Boolean,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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
};
