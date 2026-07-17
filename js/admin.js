const products = JSON.parse(localStorage.getItem("products")) || [];

const table = document.getElementById("productsTable");

const saveBtn = document.getElementById("saveProduct");

function renderProducts(){

table.innerHTML="";

products.forEach((item,index)=>{

table.innerHTML += `

<div class="admin-card">

<img src="${item.image}">

<div class="admin-info">

<h2>${item.name}</h2>

<p>${Number(item.price).toLocaleString()} تومان</p>

<span>${item.category}</span>

</div>

<div class="admin-actions">

<button class="editBtn" onclick="editProduct(${index})">

✏️ ویرایش

</button>

<button class="deleteBtn" onclick="deleteProduct(${index})">

🗑 حذف

</button>

</div>

</div>

`;

});

localStorage.setItem("products",JSON.stringify(products));

}

saveBtn.onclick=function(){

const product={

name:document.getElementById("pName").value,

price:document.getElementById("pPrice").value,

image:document.getElementById("pImage").value,

category:document.getElementById("pCategory").value

};

if(product.name=="") return;

products.push(product);

renderProducts();

document.getElementById("pName").value="";
document.getElementById("pPrice").value="";
document.getElementById("pImage").value="";

};

window.deleteProduct=function(index){

products.splice(index,1);

renderProducts();

}

window.editProduct=function(index){

document.getElementById("pName").value=products[index].name;
document.getElementById("pPrice").value=products[index].price;
document.getElementById("pImage").value=products[index].image;
document.getElementById("pCategory").value=products[index].category;

products.splice(index,1);

renderProducts();

}

renderProducts();

if(localStorage.getItem("admin")!=="true"){

location.href="login.html";

}

const logout=document.getElementById("logout");

logout.onclick=function(){

localStorage.removeItem("admin");

location.href="login.html";

}