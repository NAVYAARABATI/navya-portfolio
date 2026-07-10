AOS.init({
duration:1000,
once:true
});

new Typed(".typing",{
strings:[
"Frontend Developer",
"React Developer",
"AIML Student",
"JavaScript Enthusiast"
],
typeSpeed:70,
backSpeed:40,
backDelay:1800,
loop:true
});

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

},1200);

});

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.onclick=()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuBtn.innerHTML='<i class="ri-close-line"></i>';

}else{

menuBtn.innerHTML='<i class="ri-menu-3-line"></i>';

}

};

document.querySelectorAll(".nav-links a").forEach(link=>{

link.onclick=()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="ri-menu-3-line"></i>';

};

});

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

document.getElementById("progress-bar").style.width=(scrollTop/height)*100+"%";

});

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-160;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(item=>{

item.classList.remove("active");

if(item.getAttribute("href")==="#"+current){

item.classList.add("active");

}

});

});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(5,8,22,.9)";
header.style.boxShadow="0 10px 35px rgba(0,0,0,.3)";

}else{

header.style.background="rgba(5,8,22,.55)";
header.style.boxShadow="none";

}

});
const cursorDot=document.querySelector(".cursor-dot");
const cursorOutline=document.querySelector(".cursor-outline");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX;
const y=e.clientY;

cursorDot.style.left=x+"px";
cursorDot.style.top=y+"px";

cursorOutline.animate({

left:x+"px",
top:y+"px"

},{

duration:120,
fill:"forwards"

});

});

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.2

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

const cards=document.querySelectorAll(".skill-card,.project-card,.certificate-card,.stat-card,.about-box,.timeline-content");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateX=((y/rect.height)-0.5)*-12;
const rotateY=((x/rect.width)-0.5)*12;

card.style.transform=`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-8px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

const stats=document.querySelectorAll(".stat-card h2");

let started=false;

window.addEventListener("scroll",()=>{

const statsSection=document.querySelector(".stats");

if(!started && window.scrollY>statsSection.offsetTop-500){

started=true;

stats.forEach(stat=>{

const text=stat.innerText;

const number=parseInt(text);

if(isNaN(number)) return;

let count=0;

const speed=number/60;

function update(){

count+=speed;

if(count<number){

stat.innerText=Math.ceil(count)+"+";

requestAnimationFrame(update);

}else{

if(text.includes("+")){

stat.innerText=number+"+";

}else{

stat.innerText=text;

}

}

}

update();

});

}

});

window.addEventListener("scroll",()=>{

document.querySelectorAll(".floating").forEach((item,index)=>{

item.style.transform=`translateY(${window.scrollY*(0.04+index*0.01)}px)`;

});

});

document.querySelectorAll(".hero-social a,.footer-social a").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-10px) rotate(360deg)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) rotate(0deg)";

});

});
const form=document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const button=form.querySelector("button");

button.innerHTML="Sending...";

button.disabled=true;

setTimeout(()=>{

button.innerHTML='<i class="ri-checkbox-circle-fill"></i> Message Sent';

button.style.background="linear-gradient(135deg,#16a34a,#22c55e)";

setTimeout(()=>{

button.innerHTML="Send Message";

button.disabled=false;

button.style.background="";

form.reset();

},2500);

},1500);

});

const topButton=document.createElement("a");

topButton.href="#home";

topButton.className="top-btn";

topButton.innerHTML='<i class="ri-arrow-up-line"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.opacity="1";

topButton.style.visibility="visible";

}else{

topButton.style.opacity="0";

topButton.style.visibility="hidden";

}

});

document.querySelectorAll(".project-image img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

const revealItems=document.querySelectorAll(".stat-card,.skill-card,.project-card,.certificate-card,.timeline-item,.contact-box,.about-box");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});

const blobs=document.querySelectorAll(".blob");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

blobs.forEach((blob,index)=>{

const moveX=(x-0.5)*(25+index*15);

const moveY=(y-0.5)*(25+index*15);

blob.style.transform=`translate(${moveX}px,${moveY}px)`;

});

});

window.addEventListener("scroll",()=>{

const value=window.scrollY;

document.querySelector(".blob1").style.transform=`translateY(${value*0.12}px)`;

document.querySelector(".blob2").style.transform=`translateY(${-value*0.08}px)`;

document.querySelector(".blob3").style.transform=`translateX(${value*0.06}px)`;

});

window.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

document.addEventListener("keydown",(e)=>{

if(e.key==="F12"){

e.preventDefault();

}

if(e.ctrlKey && e.shiftKey && (e.key==="I" || e.key==="J" || e.key==="C")){

e.preventDefault();

}

if(e.ctrlKey && e.key==="U"){

e.preventDefault();

}

});

console.log("%cWelcome Recruiter 👋","font-size:28px;color:#8b5cf6;font-weight:bold;");

console.log("%cDesigned & Developed by Navya Arabati","font-size:18px;color:#22d3ee;");