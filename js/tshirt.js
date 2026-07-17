// ======================
// گالری تصاویر
// ======================

const thumbs=document.querySelectorAll(".thumb");
const mainImage=document.getElementById("mainImage");

thumbs.forEach(img=>{

img.onclick=()=>{

mainImage.src=img.src;

document.querySelector(".thumb.active")?.classList.remove("active");

img.classList.add("active");

};

});

// ======================
// قیمت
// ======================

const size=document.getElementById("size");
const count=document.getElementById("count");
const finalPrice=document.getElementById("finalPrice");

function updatePrice(){

let price=320000;

if(size.value=="XL") price+=30000;
if(size.value=="XXL") price+=50000;

price*=Number(count.value);

finalPrice.innerHTML=price.toLocaleString()+" تومان";

}

size.onchange=()=>{

updatePrice();

highlightSize();

};
count.oninput=updatePrice;

updatePrice();


// ======================
// پیش نمایش فایل
// ======================

const upload=document.getElementById("uploadLogo");
const preview=document.getElementById("logoPreview");

upload.onchange=(e)=>{

const file=e.target.files[0];

if(!file) return;

preview.src=URL.createObjectURL(file);

preview.style.display="block";

};


// ======================
// افزودن به سبد خرید
// ======================

document.getElementById("addCart").onclick=()=>{

let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.push({

name:"تیشرت Premium",

price:parseInt(finalPrice.innerHTML.replace(/[^0-9]/g,"")),

size:size.value,

count:count.value,

image:"assets/images/tshirt-front.png"

});

localStorage.setItem("cart",JSON.stringify(cart));

alert("✅ محصول به سبد خرید اضافه شد");

};


// ======================
// ثبت سفارش
// ======================

document.getElementById("orderBtn").onclick=()=>{

alert("مرحله انتخاب واتساپ و روبیکا بعدا اضافه می‌شود.");

};


// ======================
// طرح های آماده
// ======================

document.querySelectorAll(".design").forEach(img=>{

img.onclick=()=>{

document.querySelectorAll(".design").forEach(d=>{

d.classList.remove("active");

});

img.classList.add("active");

// اینجا بعدا طرح روی مدل 3D می‌افتد

};

});

function highlightSize(){

document.querySelectorAll(".size-table tr").forEach(row=>{

row.classList.remove("selected");

});

const rows=document.querySelectorAll(".size-table tr");

const value=size.value;

rows.forEach(row=>{

if(row.cells.length>0){

if(row.cells[0].innerText===value){

row.classList.add("selected");

}

}

});

}

highlightSize();

document.querySelectorAll(".size-table tr").forEach(row=>{

row.onclick=()=>{

if(row.cells.length==0) return;

const s=row.cells[0].innerText;

if(s=="سایز") return;

size.value=s;

updatePrice();

highlightSize();

};

});