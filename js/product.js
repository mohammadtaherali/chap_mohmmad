function changeImage(src){

document.getElementById("mainImage").src=src;

}

const size=document.getElementById("size");

const count=document.getElementById("count");

const price=document.getElementById("price");

function updatePrice(){

let p=320000;

if(size.value=="XL") p+=30000;

if(size.value=="XXL") p+=50000;

p*=Number(count.value);

price.innerHTML=p.toLocaleString()+" تومان";

}

size.onchange=updatePrice;

count.oninput=updatePrice;

updatePrice();