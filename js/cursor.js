const cursor=document.getElementById("shirtCursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.glass-btn,.shop-card,.color,.design,input,select,textarea").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("hover");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("hover");

});

});