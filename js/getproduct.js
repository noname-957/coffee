async function getProducts() {
  console.log('상품목록조회');
  const productList = ;

  //http method : GET
  const response = await fetch(productListApiUrl);
  const jsonObject = await response.json();
  const products = jsonObject.products;
  // console.log('조회된 상품의 목록', products);
  // console.log('조회된 상품의 목록 갯수', products.length);  2개

  //조회된 상품 목록을 가지고 DOM을 생성해서 html에 넣기.
  const divRow = document.querySelector('#productsSection > div.row');
  console.log('row div', divRow);

  const htmlArray = products.map((product) => {
    console.log('상품 단건', product);

    return `<div class="col">
    <div class="card" style="width: 18rem">
      <img
        src="${product.image_url}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${product.korean_name}</h5>
        <p class="card-text">
          ${product.description}
        </p>
        <a href="detail.html?product_id=${product.id}" class="btn btn-primary"
          >주문하러가기</a
        >
      </div>
    </div>
  </div>`;
  });

  divRow.innerHTML = htmlArray.join('');
}

//화면에 로딩이 안되는 문제 : getProduct()를 정의만 하고 아무도 안불러줬어 !!!
//<body onload="getProducts()">를 추가해줬음  -> 화면이 로딩되면 저 함수를 불러오는 호출명이야
