import { refresh } from "/Laveree/js/common.js";

const topImg = {
  ALL: "/laveree/image/shop/topImages/shop_all_image.jpg",
  DETERGENT: "/laveree/image/shop/topImages/shop_detergent_image.jpg",
  REMOVER: "/laveree/image/shop//topImages/shop_remover_image.jpg",
  GIFT: "/laveree/image/shop/topImages/shop_gift_image.jpg",
  ACC: "/laveree/image/shop/topImages/shop_acc_image.jpg",
};

const productLists = [
  {
    name: "STAIN REMOVER",
    price: "36,000원",
    details: "얼룩제거제 295ML",
    imgSrc: "/laveree/image/shop/products/stain_remover.jpg",
    categoryType: ["ALL", "REMOVER"],
  },
  {
    name: "DETERGENT - FOREST",
    price: "45,000원",
    details: "세탁세제 900ML",
    imgSrc: "/laveree/image/shop/products/detergent_forest.jpg",
    categoryType: ["ALL", "DETERGENT"],
  },
  {
    name: "DETERGENT - WIND",
    price: "45,000원",
    details: "세탁세제 900ML",
    imgSrc: "/laveree/image/shop/products/detergent_wind.jpg",
    categoryType: ["ALL", "DETERGENT"],
  },
  {
    name: "[GIFT] DETERGENT",
    price: "50,000원",
    details: "선물포장 세탁세제 900ML",
    imgSrc: "/laveree/image/shop/products/detergent_gift.jpg",
    categoryType: ["ALL", "DETERGENT", "GIFT"],
  },
  {
    name: "[GIFT] STAIN REMOVER",
    price: "41,000원",
    details: "선물포장 얼룩제거제 295ML",
    imgSrc: "/laveree/image/shop/products/stain_remover_gift.jpg",
    categoryType: ["ALL", "REMOVER", "GIFT"],
  },
  {
    name: "WASHING DUO",
    price: "95,000원",
    details: "2종 선물세트",
    imgSrc: "/laveree/image/shop/products/washing_duo.jpg",
    categoryType: ["ALL", "GIFT"],
  },
  {
    name: "ESSENTIAL DUO",
    price: "86,000원",
    details: "2종 선물세트",
    imgSrc: "/laveree/image/shop/products/essential_duo.jpg",
    categoryType: ["ALL", "GIFT"],
  },
  {
    name: "ULTIMATE TRIO",
    price: "131,000원",
    details: "3종 선물세트",
    imgSrc: "/laveree/image/shop/products/ultimate_trio.jpg",
    categoryType: ["ALL", "GIFT"],
  },
  {
    name: "[TRAVEL] REMOVER STICKER POUCH",
    price: "19,000원",
    details: "여행용 얼룩제거제 스티커 파우치",
    imgSrc: "/laveree/image/shop/products/remover_sticker_pouch_travel.jpg",
    categoryType: ["ALL", "REMOVER", "GIFT"],
  },
  {
    name: "[TRAVEL] ESSENTIAL DUO",
    price: "33,000원",
    details: "여행용 2종 선물세트",
    imgSrc: "/laveree/image/shop/products/essential_duo_travel.jpg",
    categoryType: ["ALL", "GIFT"],
  },
  {
    name: "[TRAVEL] STAIN REMOVER",
    price: "15,000원",
    details: "얼룩제거제 59ML",
    imgSrc: "/laveree/image/shop/products/stain_remover_travel.jpg",
    categoryType: ["ALL", "REMOVER"],
  },
  {
    name: "[TRAVEL] DETERGENT - FOREST",
    price: "14,000원",
    details: "세탁세제 59ML",
    imgSrc: "/laveree/image/shop/products/detergent_forest_travel.jpg",
    categoryType: ["ALL", "DETERGENT"],
  },
  {
    name: "[TRAVEL] DETERGENT - WIND",
    price: "14,000원",
    details: "세탁세제 59ML",
    imgSrc: "/laveree/image/shop/products/detergent_wind_travel.jpg",
    categoryType: ["ALL", "DETERGENT"],
  },
  {
    name: "ECO BAG",
    price: "12,900원",
    details: "에코백",
    imgSrc: "/laveree/image/shop/products/eco_bag.jpg",
    categoryType: ["ALL", "ACC"],
  },
  {
    name: "LAVEREE X BLOOMINGTALE",
    price: "29,000원",
    details: "미니뿌 키링",
    imgSrc: "/laveree/image/shop/products/Laveree_bloomingtale.jpg",
    categoryType: ["ALL", "ACC"],
  },
  {
    name: "FELT BASKET",
    price: "9,900원",
    details: "펠트 바스켓",
    imgSrc: "/laveree/image/shop/products/felt_basket.png",
    categoryType: ["ALL", "ACC"],
  },
  {
    name: "SCRUNCHINE",
    price: "15,900원",
    details: "헤어 스크런치",
    imgSrc: "/laveree/image/shop/products/scrunchie.png",
    categoryType: ["ALL", "ACC"],
  },
  {
    name: "PUMP",
    price: "3,000원",
    details: "세제용 펌프",
    imgSrc: "/laveree/image/shop/products/pump.jpg",
    categoryType: ["ALL", "ACC"],
  },
  {
    name: "GUN SPRAY",
    price: "1,000원",
    details: "건 스프레이",
    imgSrc: "/laveree/image/shop/products/gun_spray.jpg",
    categoryType: ["ALL", "ACC"],
  },
  {
    name: "MEASURING CUP",
    price: "1,000원",
    details: "세제용 계량컵",
    imgSrc: "/laveree/image/shop/products/measuring_cup.jpg",
    categoryType: ["ALL", "ACC"],
  },
  {
    name: "SHOPPING BAG",
    price: "1,000원",
    details: "쇼핑백 (XS)",
    imgSrc: "/laveree/image/shop/products/shopping_bag(XS).png",

    categoryType: ["ALL", "ACC"],
  },
  {
    name: "SHOPPING BAG",
    price: "1,500원",
    details: "쇼핑백 (S)",
    imgSrc: "/laveree/image/shop/products/shopping_bag(S).jpg",
    categoryType: ["ALL", "ACC"],
  },
  {
    name: "SHOPPING BAG",
    price: "2,000원",
    details: "쇼핑백 (M)",
    imgSrc: "/laveree/image/shop/products/shopping_bag(M).png",
    categoryType: ["ALL", "ACC"],
  },
];

// 처음 load 할 때 사용
export const initShop = () => {
  const categoryList = document.querySelectorAll(".categoryLists");
  const photoTop = document.querySelector("#photoThis");
  const fixedHover = document.querySelectorAll(".categoryTag");
  const grid = document.querySelector("#productsGrid");

  if (!grid) return;

  // 기존 내용 초기화
  grid.innerHTML = "";

  // product 리스트 생성
  productLists.forEach((v) => {
    const prdLis = document.createElement("li");
    prdLis.classList.add("prdLis", ...v.categoryType);
    // prdLis.id = "prdLis";
    const prdLisPic = document.createElement("picture");
    prdLisPic.id = "prdLisPic";
    const prdLisPicImg = document.createElement("img");
    prdLisPicImg.id = "prdLisPicImg";
    const prdLisDesc = document.createElement("div");
    prdLisDesc.id = "prdLisDesc";
    const prdLisDescDetail = document.createElement("div");
    prdLisDescDetail.id = "prdLisDescDetail";
    const prdLisDescDetailName = document.createElement("span");
    prdLisDescDetailName.id = "prdLisDescDetailName";
    const prdLisDescDetailPrice = document.createElement("span");
    prdLisDescDetailPrice.id = "prdLisDescDetailPrice";
    const prdLisDescDetailUse = document.createElement("span");
    prdLisDescDetailUse.id = "prdLisDescDetailUse";

    prdLisDescDetailName.innerText = v.name;
    prdLisDescDetailPrice.innerText = v.price;
    prdLisDescDetailUse.innerText = v.details;
    prdLisPicImg.src = v.imgSrc;

    grid.appendChild(prdLis);
    prdLis.append(prdLisPic, prdLisDesc);
    prdLisPic.appendChild(prdLisPicImg);
    prdLisDesc.append(prdLisDescDetail, prdLisDescDetailUse);
    prdLisDescDetail.append(prdLisDescDetailName, prdLisDescDetailPrice);
  });

  // 카테고리 클릭 이벤트
  categoryList.forEach((v) => {
    const category = v.id.split(" ")[1];

    v.addEventListener("click", () => {
      // category별 보여주기
      document.querySelectorAll(".prdLis").forEach((item) => {
        if (item.classList.contains(category)) item.classList.remove("hidden");
        else item.classList.add("hidden");
      });

      // 상단 img 변경
      photoTop.src = topImg[category];

      // 카테고리 fixed 설정
      fixedHover.forEach((after) => {
        if (after.classList.contains(category)) {
          after.classList.add("fixed");
        } else {
          after.classList.remove("fixed");
        }
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  refresh();
});
