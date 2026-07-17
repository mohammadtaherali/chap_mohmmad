const search=document.getElementById("searchProduct");

const sort=document.getElementById("sortProducts");

const cards=[...document.querySelectorAll(".shop-card")];

search.onkeyup=()=>{

cards.forEach(card=>{

card.style.display=

card.dataset.name.includes(search.value)

?"block":"none";

});

};

sort.onchange=()=>{

let parent=cards[0].parentNode;

let arr=[...cards];

if(sort.value=="cheap"){

arr.sort((a,b)=>a.dataset.price-b.dataset.price);

}

if(sort.value=="expensive"){

arr.sort((a,b)=>b.dataset.price-a.dataset.price);

}

arr.forEach(card=>parent.appendChild(card));

};

document.querySelectorAll(".fav").forEach(btn=>{

btn.onclick=function(){

const card=this.parentElement;

const item={

name:card.querySelector("h2").innerText,

price:card.querySelector(".shop-price").innerText,

img:card.querySelector("img").src,

link:card.querySelector("a").href

};

let favs=JSON.parse(localStorage.getItem("favorites"))||[];

favs.push(item);

localStorage.setItem("favorites",JSON.stringify(favs));

this.innerHTML="❤️";

};

});