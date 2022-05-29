const productsList = document.querySelector(".products") as HTMLElement;
let cartProducts = document.querySelector(".cart") as any;
let totalPrice = document.querySelector(".price") as any;
let arrCartProducts: any = [];
let prices = 0;

function getData() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      json.map((x: any) => {
        productsList.innerHTML += `<div class="productCard">
                    <div class="img"><img src='${x.image}'></div>
                    <p class="category">${x.category}</p>
                    <h3 class="title">${x.title}</h3>
                    <p class="para">${x.description}</p>
                    <h4>${x.price} EUR</h4>
                    <button id="btn" onclick='cartUpdate(${x.id}, ${x.price})'>ADD TO CART</button>
                    </div>`;
      });
    })
}

getData();

function cartUpdate(id: any, price: number) {
  prices += price;
  totalPrice.innerHTML = `Total price: ${prices.toFixed(2)} EUR`;
  arrCartProducts.push(id);
  cartProducts.innerHTML = `Cart: ${arrCartProducts.length} Item(s)`;
  localStorage.setItem(id, id);
}
