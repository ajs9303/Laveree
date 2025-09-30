const productLists = [
  {
    name: "STAIN PEMOVER",
    price: "36,000원",
    details: "얼룩제거제 295ML",
    imgSrc: "/Laveree-main/heedo/shop_images/products/stain_remover.jpg",
  },
  {
    name: "DETERGENT-FOREST",
    price: "45,000원",
    details: "세탁세제 900ML",
    imgSrc: "/Laveree-main/heedo/shop_images/products/detergent_forest.jpg",
  },
  {
    name: "DETERGENT-WIND",
    price: "45,000원",
    details: "세탁세제 900ML",
    imgSrc: "/Laveree-main/heedo/shop_images/products/detergent_wind.jpg",
  },
  {
    name: "[GIFT] DETERGENT",
    price: "50,000원",
    details: "선물포장 세탁세제 900ML",
    imgSrc: "/Laveree-main/heedo/shop_images/products/detergent_gift.jpg",
  },
  {
    name: "[GIFT] STAIN REMOVER",
    price: "41,000원",
    details: "선물포장 얼룩제거제 295ML",
    imgSrc: "/Laveree-main/heedo/shop_images/products/stain_remover_gift.jpg",
  },
  {
    name: "WASHING DUO",
    price: "95,000원",
    details: "2종 선물세트",
    imgSrc: "/Laveree-main/heedo/shop_images/products/washing_duo.jpg",
  },
  {
    name: "ESSENTIAL DUO",
    price: "86,000원",
    details: "2종 선물세트",
    imgSrc: "/Laveree-main/heedo/shop_images/products/essential_duo.jpg",
  },
  {
    name: "ULTIMATE TRIO",
    price: "131,000원",
    details: "3종 선물세트",
    imgSrc: "/Laveree-main/heedo/shop_images/products/ultimate_trio.jpg",
  },
  {
    name: "[TRAVEL] REMOVER STICKER POUCH",
    price: "19,000원",
    details: "여행용 얼룩제거제 스티커 파우치",
    imgSrc:
      "/Laveree-main/heedo/shop_images/products/remover_sticker_pouch_travel.jpg",
  },
  {
    name: "[TRAVEL] ESSENTIAL DUO",
    price: "33,000원",
    details: "여행용 2종 선물세트",
    imgSrc: "/Laveree-main/heedo/shop_images/products/essential_duo_travel.jpg",
  },
  {
    name: "[TRAVEL] STAIN REMOVER",
    price: "15,000원",
    details: "얼룩제거제 59ML",
    imgSrc: "/Laveree-main/heedo/shop_images/products/stain_remover_travel.jpg",
  },
  {
    name: "[TRAVEL] DETERGENT-FOREST",
    price: "14,000원",
    details: "세탁세제 59ML",
    imgSrc:
      "/Laveree-main/heedo/shop_images/products/detergent_forest_travel.jpg",
  },
  {
    name: "[TRAVEL] DETERGENT-WIND",
    price: "14,000원",
    details: "세탁세제 59ML",
    imgSrc:
      "/Laveree-main/heedo/shop_images/products/detergent_wind_travel.jpg",
  },
  {
    name: "ECO BAG",
    price: "12,900원",
    details: "에코백",
    imgSrc: "/Laveree-main/heedo/shop_images/products/eco_bag.jpg",
  },
  {
    name: "LAVEREE X BLOOMINGTALE",
    price: "29,000원",
    details: "미니뿌 키링",
    imgSrc: "/Laveree-main/heedo/shop_images/products/Laveree_bloomingtale.jpg",
  },
  {
    name: "FELT BASKET",
    price: "9,900원",
    details: "펠트 바스켓",
    imgSrc: "/Laveree-main/heedo/shop_images/products/felt_basket.png",
  },
  {
    name: "SCRUNCHINE",
    price: "15,900원",
    details: "헤어 스크런치",
    imgSrc: "/Laveree-main/heedo/shop_images/products/scrunchie.png",
  },
  {
    name: "PUMP",
    price: "3,000원",
    details: "세제용 펌프",
    imgSrc: "/Laveree-main/heedo/shop_images/products/pump.jpg",
  },
  {
    name: "GUN SPRAY",
    price: "1,000원",
    details: "건 스프레이",
    imgSrc: "/Laveree-main/heedo/shop_images/products/gun_spray.jpg",
  },
  {
    name: "MEASURING CUP",
    price: "1,000원",
    details: "세제용 계량컵",
    imgSrc: "/Laveree-main/heedo/shop_images/products/measuring_cup.jpg",
  },
  {
    name: "SHOPPING BAG",
    price: "1,000원",
    details: "쇼핑백 (XS)",
    imgSrc: "/Laveree-main/heedo/shop_images/products/shopping_bag(XS).png",
  },
  {
    name: "SHOPPING BAG",
    price: "1,500원",
    details: "쇼핑백 (S)",
    imgSrc: "/Laveree-main/heedo/shop_images/products/shopping_bag(S).jpg",
  },
  {
    name: "SHOPPING BAG",
    price: "2,000원",
    details: "쇼핑백 (M)",
    imgSrc: "/Laveree-main/heedo/shop_images/products/shopping_bag(M).png",
  },
];
const grid = document.querySelector("#productsGrid"); // ul(상품 매대 그리드)태그, 안에 li 로 물건 정렬 할 것.

productLists.forEach((v) => {
  // grid(ul) 내부
  const prdLis = document.createElement("li");
  prdLis.id = "prdLis";
  // ul 자식, 아래 요소 부모
  const prdLisPic = document.createElement("picture");
  prdLisPic.id = "prdLisPic";
  // 물건 픽쳐, prdLis 자식
  const prdLisPicImg = document.createElement("img");
  prdLisPicImg.id = "prdLisPicImg";
  // 물건 이미지, prdLisPic 자식, v.imgSrc 삽입
  const prdLisDesc = document.createElement("div");
  prdLisDesc.id = "prdLisDesc";
  // 물건 설명, prdLis 자식
  const prdLisDescDetail = document.createElement("div");
  prdLisDescDetail.id = "prdLisDescDetail";
  // 이름 및 가격, space-between 사용, prdLisDesc 자식
  const prdLisDescDetailName = document.createElement("span");
  prdLisDescDetailName.id = "prdLisDescDetailName";
  // 이름, prdLisDescDetail 자식, v.name 삽입
  const prdLisDescDetailPrice = document.createElement("span");
  prdLisDescDetailPrice.id = "prdLisDescDetailPrice";
  // 가격, prdLisDescDetail 자식, v.price 삽입
  const prdLisDescDetailUse = document.createElement("span");
  prdLisDescDetailUse.id = "prdLisDescDetailUse";
  // 최하위 설명, prdLisDesc 자식, v.details 삽입

  (prdLisDescDetailName.innerText = v.name),
    (prdLisDescDetailPrice.innerText = v.price),
    (prdLisDescDetailUse.innerText = v.details),
    (prdLisPicImg.src = v.imgSrc);

  grid.appendChild(prdLis);
  prdLis.append(prdLisPic, prdLisDesc);
  prdLisPic.appendChild(prdLisPicImg);
  prdLisDesc.append(prdLisDescDetail, prdLisDescDetailUse);
  prdLisDescDetail.append(prdLisDescDetailName, prdLisDescDetailPrice);
});
