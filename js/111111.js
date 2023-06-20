const products = [
  {
    id: 1,
    ko_name: '그라니토스 데 오르티스 2000',
    en_name: 'Granitos de Ortiz 2000',
    ko_country: '코스타리카',
    en_country: 'Costa Rica',
    img_url: 'img/bean4.jpg',
    image_url:
      'https://m.coffeelibre.kr/web/product/big/202210/1d0ddd2e7d5a96df86a8489b4707f8b9.jpg',
    category: '싱글오리진',
    roasting: '중약배전',
    aroma: '황도, 라즈베리, 감귤, 꿀',
    description: '엄청 맛있습니다.',
    price: 20000,
    weight: [200, 500],
    grind: ['홀빈', '분쇄'],
    delivery: '택배',
    roasting_date: '2023-06-19',
  },
  {
    id: 2,
    ko_name: '실베리오',
    en_name: 'Silverio',
    ko_country: '과테말라',
    en_country: 'Guatemala',
    image_url: 'https://coffeelibre.kr/web/product/big/202306/092be6dd1e54709edbaf10ebf0dc3c23.png',
    category: '싱글오리진',
    roasting: '중강배전',
    aroma: '오렌지, 사탕수수, 밀크초콜릿, 라운드바디',
    description: '엄청 맛있습니다.',
    price: 14000,
    weight: [200, 500],
    grind: ['홀빈', '분쇄'],
    delivery: '택배',
    roasting_date: '2023-06-19',
  },
];

async function getProducts() {
  const productListApiUrl = "https://00dc-14-39-99-50.ngrok-free.app/shop/product/";
   //http method : GET
  const response = await fetch(productListApiUrl);
  const jsonObject = await Response.json();
  const products = jsonObject.products;
  console.log("조회된 상품목록", products);
  console.log("조회된 상품목록 갯수", products.lenght);   //2개

  //조회된 상품 목록을 가지고 DOM을 생성해서 html에 넣기
  const divRow = document.querySelector("#productsSection > div.row");
  console.log("row div", divRow);
  //#productsSection은 상품 목록의 <section>에 지정해둠

  products.map((product) => {
    console.log("상품 단건", product);
    const divCol = document.createElement('div');
    divCol.className = "col";
    divCol.innerText = product.ko_name;

    const divCard = document.createElement('div');
    divCard.className = "card";
    divCard.style.width = "18em";
    divCol.appendChild(divCard);
    divRow.appendChild(divCol);




  });
}

getProducts();

// join() 찾아보기
// 화면이 생성 됐어요!
<a></a> 로 만들었잖아요/ 링크도 열리겠죠
열린 상태에서 저 주소창의 쿼리를 가져와야 하는데, 그방법이

location.herf
search ? product_id=1
여기서 1을 가져오는 페치 함수를 만들...
location.search.slice(-1);  // 1을 가져올거야... 문자열의 마지막 1을 가져오느느거
let productId = 1;
fetch(`상뭄목록조회주소/${product.id}`)






fetch('https:// sdaslkdlsakld/shpo/order'),{
  method: "POST",
  body: JSON