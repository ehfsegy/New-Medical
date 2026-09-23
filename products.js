/* =====================================
   NEW MEDICAL PRODUCTS DATA
===================================== */


const products = [

{
    id:1,
    name:"سرير كشف طبي 4 ارجل",
    image:"assets/سرير كشف طبي 4 ارجل.webp",
    description:"سرير كشف طبي عملي ومتين، مصمم للاستخدام في العيادات والمراكز الطبية وغرف الكشف.",
    price:"2160 جنيه"
},

{
    id:2,
    name:"سرير كشف طبي 6 ارجل",
    image:"assets/سرير كشف طبي 6 ارجل.jpeg",
    description:"سرير كشف طبي عملي ومتين، مصمم للاستخدام في العيادات والمراكز الطبية وغرف الكشف.",
    price:"2400 جنيه"
},

{
    id:3,
    name:"سرير علاج طبيعي 4 رجل",
    image:"assets/سرير علاج طبيعى 4 رجل.webp",
    description:"سرير علاج طبيعى عملي ومتين، مصمم للاستخدام في العيادات والمراكز الطبية وغرف الكشف.",
    price:"2400 جنيه"
},

{
    id:4,
    name:"سرير علاج طبيعي 6 رجل",
    image:"assets/سرير كشف طبي 6 ارجل.jpeg",
    description:"سرير علاج طبيعى عملي ومتين، مصمم للاستخدام في العيادات والمراكز الطبية وغرف الكشف.",
    price:"2640 جنيه"
},

{
    id:5,
    name:"برفان 3 ضلفة",
    image:"assets/برفان 3 ضلفة.jpeg",
    description:"برفان 3 ضلفة بتصميم عملي وأنيق، مناسب لتقسيم المساحات وخلق خصوصية، وسهل الاستخدام والنقل. تصميمه يشبه الستارة ويمنح المكان مظهرًا مرتبًا وأنيقًا.",
    price:"960 جنيه"
},

{
    id:6,
    name:"ستارة برفان 3 ضلفة",
    image:"assets/ستارة برفان 3 ضلفة.png",
    description:"ستارة برفان 3 ضلفة عملية ومناسبة للفصل بين المساحات وتوفير الخصوصية، بتصميم بسيط وسهل الاستخدام، ومثالية للاستخدام في العيادات والمراكز الطبية والمستشفيات.",
    price:"100 جنيه"
},

{
    id:7,
    name:"حامل محاليل",
    image:"assets/حامل محاليل.webp",
    description:"حامل محاليل عملي ومتين، مصمم لتعليق أكياس المحاليل الطبية بشكل آمن ومنظم، ومناسب للاستخدام في المستشفيات والعيادات ومراكز الرعاية الصحية.",
    price:"540 جنيه"
},

{
    id:8,
    name:"دولاب ادوات 1 ضلفة",
    image:"assets/دولاب ادوات 1 ضلفة.jpeg",
    description:"دولاب أدوات 1 ضلفة عملي ومناسب لحفظ وتنظيم الأدوات والمستلزمات الطبية، بتصميم يوفر مساحة تخزين مرتبة وسهولة في الوصول إلى المحتويات.",
    price:"1920 جنيه"
},

{
    id:9,
    name:"مشاية كبار السن",
    image:"assets/مشاية كبار السن.webp",
    description:"مشاية كبار السن مصممة لتوفير الدعم والثبات أثناء المشي، وتساعد على الحركة بأمان وراحة داخل المنزل وخارجه، مع تصميم عملي وسهل الاستخدام.",
    price:"240 جنيه"
},

{
    id:10,
    name:"سلم سرير كشف",
    image:"assets/سلم سرير كشف.webp",
    description:"سلم سرير كشف عملي ومتين، مصمم لتسهيل صعود ونزول المرضى من سرير الكشف بأمان وراحة، ومناسب للاستخدام في العيادات والمراكز الطبية والمستشفيات.",
    price:"480 جنيه"
},

{
    id:11,
    name:"ترابيزة الات صاج 2 روف",
    image:"assets/ترابيزة الات صاج 2 روف.webp",
    description:"ترابيزة آلات صاج 2 روف متينة وعملية، مصممة لحفظ وترتيب الأدوات والمستلزمات الطبية، مع رفّين يوفران مساحة تخزين إضافية وسهولة في الوصول إلى الأدوات.",
    price:"900 جنيه"
},

{
    id:12,
    name:"ترابيزة الات صاج 2 روف",
    image:"assets/ترابيزة الات صاج 3 روف.jpeg",
    description:"ترابيزة آلات صاج 2 روف متينة وعملية، مصممة لحفظ وترتيب الأدوات والمستلزمات الطبية، مع رفّين يوفران مساحة تخزين إضافية وسهولة في الوصول إلى الأدوات.",
    price:"1020 جنيه"
},

{
    id:13,
    name:"ترابيزة الات استانلس 2 رف",
    image:"assets/ترابيزة الات استانلس 2 رف.webp",
    description:"ترابيزة آلات استانلس 2 رف متينة وسهلة التنظيف، مصممة لتنظيم وحمل الأدوات والمستلزمات الطبية، مع رفّين لتوفير مساحة تخزين عملية ومناسبة للعيادات والمستشفيات.",
    price:"1500 جنيه"
},

{
    id:14,
    name:"ترولى سونار",
    image:"assets/ترولى سونار.jpeg",
    description:"ترولي سونار عملي ومتين، مصمم لحمل وتركيب جهاز السونار والمستلزمات الخاصة به، مع عجلات لسهولة الحركة والتنقل داخل العيادات والمراكز الطبية والمستشفيات.",
    price:"1000 جنيه"
},

{
    id:15,
    name:"سرير إقامة واحد حركة",
    image:"assets/سرير إقامة واحد حركة.jpeg",
    description:"سرير إقامة واحد حركة مصمم لتوفير الراحة والدعم للمريض أثناء فترة الإقامة، مع إمكانية تعديل وضعية السرير لسهولة الاستخدام والعناية بالمريض، ومناسب للمستشفيات والعيادات.",
    price:"10500 جنيه"
},

{
    id:16,
    name:"سرير إقامة اتنين حركة",
    image:"assets/سرير إقامة اتنين حركة.jpeg",
    description:"سرير إقامة اتنين حركة مصمم لتوفير الراحة والدعم للمريض أثناء فترة الإقامة، مع إمكانية تعديل وضعية السرير لسهولة الاستخدام والعناية بالمريض، ومناسب للمستشفيات والعيادات.",
    price:"12000 جنيه"
},



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



<a href="https://wa.me/201004893388?text=اريد طلب ${product.name}"

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