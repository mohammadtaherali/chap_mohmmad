const list=document.getElementById("favoritesList");

const favs=JSON.parse(localStorage.getItem("favorites"))||[];

list.innerHTML="";

if(favs.length==0){

list.innerHTML="<h2>هیچ محصولی وجود ندارد ❤️</h2>";

}else{

favs.forEach(item=>{

list.innerHTML+=`

<div class="shop-card">

<img src="${item.image}">

<h2>${item.name}</h2>

<p>

${Number(item.price).toLocaleString()} تومان

</p>

<a href="tshirt.html" class="glass-btn">

مشاهده

</a>

</div>

`;

});

}