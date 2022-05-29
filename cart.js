"use strict";
let products = document.querySelector('.cartProducts');
let totalPrc = document.querySelector('.totalPrice');
let prices2 = 0;
let cartArr = [];
function getDataLS() {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
        json.map((y) => {
            if (y.id == localStorage[y.id]) {
                cartArr.push(y);
                prices2 += y.price;
                totalPrc.innerHTML = `Total Price: ${prices2}`;
            }
        });
        cartArr.filter((element) => {
            products.innerHTML += `
                    <div class="lsProducts">
                    <div class="img"><img src='${element.image}'></div>
                    <h4 class="quant">Quantity: 1</h4>
                    <h4 class="smPrice">Price: ${element.price} EUR</h4>
                    <div class="btns">
                    <button class="btnAdd" onclick='add()'>Add</button>
                    <button class="btnRemove" onclick='remove()'>Remove</button>
                    </div>
                    </div>
            `;
        });
    });
}
getDataLS();
function add() {
}
