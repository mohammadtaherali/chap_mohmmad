import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const viewer=document.getElementById("viewer");

const scene=new THREE.Scene();
scene.background=new THREE.Color(0x101522);

const camera=new THREE.PerspectiveCamera(
45,
viewer.clientWidth/viewer.clientHeight,
0.1,
1000
);

camera.position.set(0,1.2,3);

const renderer=new THREE.WebGLRenderer({
antialias:true,
alpha:true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(viewer.clientWidth,viewer.clientHeight);

viewer.appendChild(renderer.domElement);

const controls=new OrbitControls(camera,renderer.domElement);

controls.enableDamping=true;
controls.autoRotate=true;
controls.autoRotateSpeed=2;

scene.add(new THREE.AmbientLight(0xffffff,2));

const light=new THREE.DirectionalLight(0xffffff,4);

light.position.set(5,8,5);

scene.add(light);

let shirt;

const textureLoader=new THREE.TextureLoader();

const canvas=document.createElement("canvas");
canvas.width=2048;
canvas.height=2048;

const ctx=canvas.getContext("2d");

ctx.fillStyle="#ffffff";
ctx.fillRect(0,0,2048,2048);

const liveTexture=new THREE.CanvasTexture(canvas);

const loader=new GLTFLoader();

loader.load(

"assets/models/tshirt.glb",

(gltf)=>{

shirt=gltf.scene;

shirt.scale.set(2,2,2);

shirt.position.set(0,-1,0);

shirt.traverse((child)=>{

if(child.isMesh){

child.material=child.material.clone();

if(child.name.includes("FRONT")){

child.material.map=liveTexture;

}else{

child.material.map=null;

}

child.material.color.set("#ffffff");

child.material.roughness=1;

child.material.metalness=0;

child.material.needsUpdate=true;

}

});

scene.add(shirt);

},

undefined,

(error)=>{

console.error(error);

}

);

function animate(){

requestAnimationFrame(animate);

controls.update();

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=viewer.clientWidth/viewer.clientHeight;

camera.updateProjectionMatrix();

renderer.setSize(viewer.clientWidth,viewer.clientHeight);

});

window.changeColor=function(color,el){

document.querySelectorAll(".color").forEach(c=>{

c.classList.remove("active");

});

if(el){

el.classList.add("active");

}

if(!shirt)return;

shirt.traverse((child)=>{

if(child.isMesh){

child.material.color.set(color);

child.material.needsUpdate=true;

}

});

};

const upload=document.getElementById("uploadLogo");

upload.addEventListener("change",(e)=>{

const file=e.target.files[0];

if(!file)return;

const reader=new FileReader();

reader.onload=function(ev){

const img=new Image();

img.onload=function(){

ctx.fillStyle="#ffffff";
ctx.fillRect(0,0,2048,2048);

ctx.drawImage(

img,

720,
500,
600,
600

);

liveTexture.needsUpdate=true;

};

img.src=ev.target.result;

};

reader.readAsDataURL(file);

});

// =========================
// حرکت طرح روی لباس
// =========================

let logoX = 950;
let logoY = 200;
let logoSize = 1200;
let currentImage = null;

function redrawLogo(){

    if(!currentImage) return;

    ctx.clearRect(0,0,2048,2048);

ctx.fillStyle="#ffffff";
ctx.fillRect(0,0,2048,2048);

// پوشاندن قسمت پشت لباس
ctx.fillStyle="#ffffff";
ctx.fillRect(0,1024,2048,1024);ctx.clearRect(0,0,2048,2048);

ctx.fillStyle="#ffffff";
ctx.fillRect(0,0,2048,2048);

// پوشاندن قسمت پشت لباس
ctx.fillStyle="#ffffff";
ctx.fillRect(0,1024,2048,1024);

    ctx.drawImage(

        currentImage,

        logoX,

        logoY,

        logoSize,

        logoSize

    );

    liveTexture.needsUpdate=true;

}

upload.addEventListener("change",(e)=>{

    const file=e.target.files[0];

    if(!file) return;

    const reader=new FileReader();

    reader.onload=(ev)=>{

        const img=new Image();

        img.onload=()=>{

            currentImage=img;

            redrawLogo();

        };

        img.src=ev.target.result;

    };

    reader.readAsDataURL(file);

});

// =========================
// کلیدهای کنترل
// ↑ ↓ ← → حرکت
// + بزرگ
// - کوچک
// =========================

window.addEventListener("keydown",(e)=>{

    switch(e.key){

        case "ArrowLeft":
            logoX-=20;
            break;

        case "ArrowRight":
            logoX+=20;
            break;

        case "ArrowUp":
            logoY-=20;
            break;

        case "ArrowDown":
            logoY+=20;
            break;

        case "+":
        case "=":
            logoSize+=20;
            break;

        case "-":
            logoSize-=20;
            if(logoSize<100) logoSize=100;
            break;

        default:
            return;

    }

    redrawLogo();

});