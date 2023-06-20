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

const koProduntName = document.querySelector('#product-name p:first-child');
const enProduntName = document.querySelector('#product-name p:last-child');

const product1 = products[1];

koProduntName.innerText = `[${product1.category}] ${product1.ko_country} ${product1.ko_name} [${product1.roasting}]`;
enProduntName.innerText = `${product1.en_country} ${product1.en_name}`;

// const bgImage = document.createElement('img');
// bgImage.src = `img/${product1}`;
// document.body.appendChild(bgImage);
