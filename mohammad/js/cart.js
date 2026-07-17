const cart=JSON.parse(localStorage.getItem("cart"))||[];

const cartItems=document.getElementById("cartItems");

const total=document.getElementById("totalPrice");

let sum=0;

cartItems.innerHTML="";

cart.forEach((item,index)=>{

sum+=Number(item.price);

cartItems.innerHTML+=`

<div class="cart-card">

<img src="${item.image}">

<div>

<h2>${item.name}</h2>

<p>

${Number(item.price).toLocaleString()} تومان

</p>

</div>

<button onclick="removeCart(${index})">

🗑

</button>

</div>

`;

});

total.innerText=sum.toLocaleString()+" تومان";

window.removeCart=function(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}