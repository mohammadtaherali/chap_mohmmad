const grid = document.getElementById("shopGrid");

const products = JSON.parse(localStorage.getItem("products")) || [];

grid.innerHTML = "";

products.forEach((product,index)=>{

grid.innerHTML += `

<div class="shop-card">

<div class="fav" onclick="addFavorite(${index})">🤍</div>

<img src="${product.image}">

<h2>${product.name}</h2>

<p class="shop-price">

${Number(product.price).toLocaleString()} تومان

</p>

<div class="shop-buttons">

<a href="tshirt.html" class="glass-btn">

مشاهده

</a>

<button class="glass-btn"

onclick="addCart(${index})">

🛒 خرید

</button>

</div>

</div>

`;

});

window.addCart=function(index){

let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.push(products[index]);

localStorage.setItem("cart",JSON.stringify(cart));

alert("✅ به سبد خرید اضافه شد");

}

window.addFavorite=function(index){

let fav=JSON.parse(localStorage.getItem("favorites"))||[];

fav.push(products[index]);

localStorage.setItem("favorites",JSON.stringify(fav));

alert("❤️ به علاقه مندی اضافه شد");

}