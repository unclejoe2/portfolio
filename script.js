// footer year
document.getElementById("year").textContent =
new Date().getFullYear();


// reveal animation
const reveals=document.querySelectorAll(".reveal");

const revealOnScroll=()=>{

for(let el of reveals){

const rect=el.getBoundingClientRect();

if(rect.top<window.innerHeight-100){

el.style.opacity="1";
el.style.transform="translateY(0)";
el.style.transition="all 0.6s ease";

}

}

};

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);


// fullscreen viewer

const cards=document.querySelectorAll(".card");
const lightbox=document.querySelector(".lightbox");
const img=document.querySelector(".lightbox-img");
const video=document.querySelector(".lightbox-video");
const close=document.querySelector(".close");


cards.forEach(card=>{

card.addEventListener("click",()=>{

const image=card.querySelector("img");
const vid=card.querySelector("video");

lightbox.style.display="flex";

if(image){

img.src=image.src;
img.style.display="block";
video.style.display="none";

}

if(vid){

video.src=vid.querySelector("source").src;
video.style.display="block";
img.style.display="none";
video.play();

}

});

});


close.onclick=()=>{

lightbox.style.display="none";
video.pause();

};
