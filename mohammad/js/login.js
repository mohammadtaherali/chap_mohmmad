document.getElementById("loginBtn").onclick=function(){

const user=document.getElementById("username").value;

const pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

localStorage.setItem("admin","true");

location.href="admin.html";

}else{

alert("نام کاربری یا رمز اشتباه است");

}

}