
// js/main.js
const isMobile = window.innerWidth <= 900;
const cursor = document.getElementById("shirtCursor");

if(!isMobile){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

}


document.querySelectorAll("a,.glass-btn,.service-card,.contact-item,.gallery img").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});




// حرکت آرام ماه با موس

const moon=document.querySelector(".moon");

if(!isMobile){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

moon.style.transform=`translate(${x}px,${y}px)`;

});

}



// ورود نرم کارت ها

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});


document.querySelectorAll(".service-card,.gallery img,.contact-item").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

observer.observe(el);

});




// پارالاکس ستاره ها

if(!isMobile){

document.addEventListener("mousemove",(e)=>{

const stars=document.getElementById("stars");

if(stars){

stars.style.backgroundPosition=
`${e.clientX/80}px ${e.clientY/80}px`;

}

});

}



// چرخش آرام ماه

if(!isMobile){

let deg=0;

setInterval(()=>{

deg+=0.08;

moon.style.rotate=deg+"deg";

},20);

}




// لودر

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},700);

}

});

const gallery=document.querySelectorAll(".gallery img");
const light=document.querySelector(".lightbox");
const lightImg=document.getElementById("lightImage");
const close=document.querySelector(".closeLight");

gallery.forEach(img=>{

img.onclick=()=>{

light.classList.add("active");

lightImg.src=img.src;

}

});

close.onclick=()=>{

light.classList.remove("active");

}

light.onclick=(e)=>{

if(e.target===light){

light.classList.remove("active");

}

};

document.querySelectorAll("model-viewer").forEach(model=>{

model.addEventListener("mousemove",(e)=>{

const rect=model.getBoundingClientRect();

const x=((e.clientX-rect.left)/rect.width-.5)*30;

const y=((e.clientY-rect.top)/rect.height-.5)*15;

model.cameraOrbit=`${x}deg ${75-y}deg 2.5m`;

});

});


const colors=document.querySelectorAll(".color");

colors.forEach(color=>{

color.onclick=()=>{

colors.forEach(c=>c.classList.remove("active"));

color.classList.add("active");

if(color.classList.contains("white")){

changeColor("#ffffff");

}

if(color.classList.contains("black")){

changeColor("#111111");

}

if(color.classList.contains("navy")){

changeColor("#1d4ed8");

}

};

});

const size=document.getElementById("size");

const count=document.getElementById("count");

const price=document.querySelector(".price");

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


const upload=document.getElementById("uploadLogo");

const logo=document.getElementById("logoPreview");

if(upload){

upload.onchange=(e)=>{

const file=e.target.files[0];

if(!file) return;

logo.src=URL.createObjectURL(file);

logo.style.display="block";

};

}

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const badge=document.getElementById("cartCount");

if(badge){

badge.innerHTML=cart.length;

}


const mobileBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileClose = document.querySelector(".mobileClose");

if(mobileBtn && mobileMenu){

mobileBtn.onclick = ()=>{

mobileMenu.classList.add("active");

};

}

if(mobileClose){

mobileClose.onclick = ()=>{

mobileMenu.classList.remove("active");

};

}
console.log("MENU JS LOADED");