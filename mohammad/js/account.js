const orders=document.getElementById("myOrders");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.forEach(item=>{

orders.innerHTML+=`

<div class="shop-card">

<img src="${item.image}">

<h2>${item.name}</h2>

<p>سایز : ${item.size}</p>

<p>تعداد : ${item.count}</p>

<h3>${item.price}</h3>

<p style="color:#5cff95">

درحال بررسی

</p>

</div>

`;

});