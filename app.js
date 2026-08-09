/* =====================================
   NEW MEDICAL APP JS
===================================== */



document.addEventListener("DOMContentLoaded",()=>{





/* =====================================
   HERO SWIPER
===================================== */


const heroSwiper = new Swiper(".heroSwiper",{


loop:true,

autoplay:{

delay:4500,

disableOnInteraction:false

},


pagination:{

el:".swiper-pagination",

clickable:true

},


effect:"fade",


speed:1000


});






/* =====================================
   MOBILE MENU
===================================== */


const menuBtn =
document.querySelector(".menu");


const navMenu =
document.querySelector("nav ul");



if(menuBtn){


menuBtn.addEventListener("click",()=>{


navMenu.classList.toggle("active");


menuBtn.classList.toggle("open");


});


}






/* Close menu after click */


document.querySelectorAll("nav ul li a")
.forEach(link=>{


link.addEventListener("click",()=>{


navMenu.classList.remove("active");


});


});








/* =====================================
   FAQ ACCORDION
===================================== */


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


const question =
item.querySelector("h3");


const answer =
item.querySelector("p");


const icon =
question.querySelector("i");



question.addEventListener("click",()=>{


faqItems.forEach(other=>{


if(other !== item){


other.querySelector("p").style.display="none";


other.querySelector("i").className=
"fa-solid fa-plus";


}


});



if(answer.style.display==="block"){


answer.style.display="none";


icon.className=
"fa-solid fa-plus";


}else{


answer.style.display="block";


icon.className=
"fa-solid fa-minus";


}



});


});







/* =====================================
   CUSTOMER REVIEWS DATA
===================================== */


const reviews=[


{

name:"أحمد محمد",

image:"images/users/user1.jpg",

text:
"منتجات ممتازة وخدمة عملاء محترمة جدًا."

},


{

name:"سارة علي",

image:"images/users/user2.jpg",

text:
"وصل الطلب بسرعة والجودة ممتازة."

},


{

name:"محمد حسن",

image:"images/users/user3.jpg",

text:
"أفضل متجر للمستلزمات الطبية تعاملت معه."

},


{

name:"منى خالد",

image:"images/users/user4.jpg",

text:
"الأسعار مناسبة والمنتجات أصلية."

}


];





const reviewsContainer =
document.querySelector(".reviews-grid");



if(reviewsContainer){


reviewsContainer.innerHTML =
reviews.map(review=>{


return `


<div class="review-card">


<div class="stars">

★★★★★

</div>


<p>

${review.text}

</p>


<div class="customer">


<img src="${review.image}"
alt="${review.name}">


<h4>

${review.name}

</h4>


</div>


</div>


`;


}).join("");



}








/* =====================================
   BACK TO TOP BUTTON
===================================== */


const backTop =
document.createElement("a");


backTop.className="back-top";


backTop.href="#";


backTop.innerHTML=
`
<i class="fa-solid fa-arrow-up"></i>
`;



document.body.appendChild(backTop);



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


backTop.style.opacity="1";


backTop.style.visibility="visible";


}else{


backTop.style.opacity="0";


backTop.style.visibility="hidden";


}


});






/* =====================================
   SCROLL ANIMATION
===================================== */


const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform=
"translateY(0)";


}


});


},{

threshold:.15

});





document.querySelectorAll(
".product-card,.review-card,.about-content,.faq-item"
)
.forEach(el=>{


el.style.opacity="0";


el.style.transform=
"translateY(40px)";


el.style.transition=
".6s ease";


observer.observe(el);


});






/* =====================================
   ACTIVE NAV ON SCROLL
===================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav ul a");



window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 120;



if(scrollY >= sectionTop){


current =
section.getAttribute("id");


}


});



navLinks.forEach(link=>{


link.style.color="";



if(link.getAttribute("href")
===
"#"+current){


link.style.color=
"#1e6463";


}


});


});





});