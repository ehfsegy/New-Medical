/* =====================================
   NEW MEDICAL PRODUCTS DATA
===================================== */


const products = [

{
    id:1,
    name:"جهاز قياس ضغط الدم",
    image:"images/products/pressure.jpg",
    description:"جهاز رقمي دقيق لقياس ضغط الدم بسهولة في المنزل.",
    price:"450 جنيه"
},

{
    id:2,
    name:"جهاز قياس السكر",
    image:"images/products/glucose.jpg",
    description:"جهاز سريع ودقيق لقياس مستوى السكر.",
    price:"350 جنيه"
},

{
    id:3,
    name:"جهاز قياس الأكسجين",
    image:"images/products/oximeter.jpg",
    description:"مقياس نبض وأكسجين الإصبع بجودة عالية.",
    price:"250 جنيه"
},

{
    id:4,
    name:"جهاز نيبولايزر",
    image:"images/products/nebulizer.jpg",
    description:"جهاز جلسات بخار للاستخدام المنزلي.",
    price:"850 جنيه"
},

{
    id:5,
    name:"كرسي متحرك طبي",
    image:"images/products/wheelchair.jpg",
    description:"كرسي مريح وسهل الحركة للاستخدام اليومي.",
    price:"2500 جنيه"
},

{
    id:6,
    name:"مشاية طبية",
    image:"images/products/walker.jpg",
    description:"مشاية ثابتة تساعد على الحركة الآمنة.",
    price:"900 جنيه"
},

{
    id:7,
    name:"سماعة طبيب",
    image:"images/products/stethoscope.jpg",
    description:"سماعة طبية احترافية للأطباء.",
    price:"300 جنيه"
},

{
    id:8,
    name:"ترمومتر رقمي",
    image:"images/products/thermometer.jpg",
    description:"قياس سريع ودقيق لدرجة الحرارة.",
    price:"150 جنيه"
},

{
    id:9,
    name:"جهاز أكسجين منزلي",
    image:"images/products/oxygen.jpg",
    description:"جهاز أكسجين للاستخدام المنزلي.",
    price:"6500 جنيه"
},

{
    id:10,
    name:"قفازات طبية",
    image:"images/products/gloves.jpg",
    description:"قفازات طبية عالية الجودة.",
    price:"120 جنيه"
},

{
    id:11,
    name:"كمامات طبية",
    image:"images/products/masks.jpg",
    description:"كمامات للحماية والاستخدام الطبي.",
    price:"100 جنيه"
},

{
    id:12,
    name:"شاش طبي",
    image:"images/products/gauze.jpg",
    description:"شاش معقم للاستخدامات الطبية.",
    price:"80 جنيه"
},

{
    id:13,
    name:"عكاز طبي",
    image:"images/products/cane.jpg",
    description:"عكاز قوي وخفيف الوزن.",
    price:"350 جنيه"
},

{
    id:14,
    name:"حزام ظهر طبي",
    image:"images/products/back-support.jpg",
    description:"داعم للظهر لتخفيف الألم.",
    price:"500 جنيه"
},

{
    id:15,
    name:"مرتبة طبية",
    image:"images/products/mattress.jpg",
    description:"مرتبة مريحة للاستخدام الطبي.",
    price:"3000 جنيه"
},

{
    id:16,
    name:"مخدة طبية",
    image:"images/products/pillow.jpg",
    description:"وسادة طبية لدعم الرقبة.",
    price:"700 جنيه"
},

{
    id:17,
    name:"سرنجات طبية",
    image:"images/products/syringe.jpg",
    description:"سرنجات معقمة للاستخدام الطبي.",
    price:"50 جنيه"
},

{
    id:18,
    name:"جهاز شفط طبي",
    image:"images/products/suction.jpg",
    description:"جهاز شفط للاستخدامات الطبية.",
    price:"2200 جنيه"
},

{
    id:19,
    name:"مطهر طبي",
    image:"images/products/sanitizer.jpg",
    description:"مطهر آمن للاستخدام اليومي.",
    price:"90 جنيه"
},

{
    id:20,
    name:"ميزان إلكتروني",
    image:"images/products/scale.jpg",
    description:"ميزان رقمي لقياس الوزن بدقة.",
    price:"600 جنيه"
}


];





/* =====================================
   CREATE PRODUCTS CARDS
===================================== */


const productsContainer =
document.querySelector(".products-grid");



if(productsContainer){


productsContainer.innerHTML = products.map(product => {


return `


<div class="product-card">


<img loading="lazy"
src="${product.image}"
alt="${product.name}">



<div class="product-info">


<h3>

${product.name}

</h3>


<p>

${product.description}

</p>


<span>

${product.price}

</span>



<a href="https://wa.me/201000000000?text=اريد طلب ${product.name}"

target="_blank"

class="product-btn">

اطلب عبر واتساب

</a>


</div>


</div>


`;


}).join("");



}






/* =====================================
   PRODUCT SCHEMA GENERATION
===================================== */


const productSchema = {


"@context":"https://schema.org",

"@type":"ItemList",

"itemListElement":

products.map((product,index)=>{


return {


"@type":"ListItem",

"position":index+1,

"item":{


"@type":"Product",

"name":product.name,

"description":product.description,

"offers":{

"@type":"Offer",

"priceCurrency":"EGP",

"price":product.price.replace(" جنيه",""),

"availability":
"https://schema.org/InStock"

}


}


}


})


};



const schemaScript =
document.createElement("script");


schemaScript.type =
"application/ld+json";


schemaScript.textContent =
JSON.stringify(productSchema);



document.head.appendChild(schemaScript);