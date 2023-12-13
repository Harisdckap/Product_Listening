"use strict"

let store_obj = [{
   Product: "High Black Beach",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-1.jpeg"
},
{
   Product: "Alabeny Table",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-2.jpeg"

},
{
   Product: "Acciendent Chai",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-3.jpeg"
},
{
   Product: "Woodles Table",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-4.jpeg"
},
{
   Product: "Dining Table",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-5.jpeg"
},
{
   Product: "Sofa Set",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-6.jpeg"
},
{
   Product: "Modern Shreif Table",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-7.jpeg"
}, {
   Product: "Emperor Bed",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-8.jpeg"
}, {
   Product: "Ulopio Sofa",
   Brand: "Caresa",
   Rate: "2.5$",
   Para_raph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore voluptatibus reprehenderit commodi numquam temporibus eos necessitatibus, natus sed quidem.",
   src: "https://course-api.com/images/store/product-9.jpeg"
}
]

let img_contain = document.querySelectorAll(".img_es");
img_contain.forEach((img, index) => {


img.addEventListener("click", () => {
      window.open('index1.html','_blank');
      let Json_store = JSON.stringify(store_obj[index]);
      localStorage.setItem("obj", Json_store);
   });
})














//------------------Filter Method------------------



// let Input_value = document.querySelector("#searchInput");
// let Total_Img = document.querySelectorAll(".img_sec");
// let Para_inn=document.querySelector(".Inner");

// Input_value.addEventListener("keyup", (e) => {
//    console.log(e.target.value);
//    var Store_val = e.target.value.toLowerCase().trim();

//    Total_Img.forEach((img) => {
//       var Data = img.dataset.item.toLowerCase();
      
//       if (Data.StartsWith(Store_val)) {
//          img.classList.remove("dis_non")
//       } else if(!Data.includes(Store_val)) {
//          img.classList.add("dis_non");
//       }
//       else{
//          Para_inn.innerHTML="The product is Empty"
//       }
//    });





let Input_value = document.querySelector("#searchInput");
let Total_Img = document.querySelectorAll(".img_sec");
let Para_inn = document.querySelector(".Inner");

Input_value.addEventListener("keyup", (e) => {
   console.log(e.target.value);
   var Store_val = e.target.value.toLowerCase().trim();

   let Product = false;

   Total_Img.forEach((img) => {
      console.log(img);
      var Data = img.dataset.item.toLowerCase();
      
      if (Data.includes(Store_val)) {
         img.classList.remove("dis_non");
         Product = true;
      } else {
         img.classList.add("dis_non");
      }
   });

   if (Product==false) {
      Para_inn.innerHTML = "The product is Empty";
      Para_inn.classList.add("parainn")
   } else {
      Para_inn.innerHTML = "";
      Para_inn.classList.remove("parainn")
   }
});














 









































































// --------------------------------------Way 1--------------------
// console.log(store_obj[0]);

// let Hov_cont = document.querySelectorAll(".img_sec")
// console.log(img_contain);


// Hov_cont.forEach((Hover, index) => {
//    Hover.addEventListener("click", function () {
 
//       let img = store_obj[index].src
//       let cont = store_obj[index].Product
//       let Brand = store_obj[index].Brand
//       let rate = store_obj[index].Rate
//       let para = store_obj[index].Para_raph
//       window.open("",'_blank').document.write(`<html><head><title>Image-Contains</title><link rel="stylesheet" href="style1.css"></head><body>  <div id="head_1"> <button class="btn_clk" onclick=btn()>${'Back Home'}</button> <div id="Contain_1"> <div id="img__1"> <img src=${img}></div><div id="Content_2"><h4 class="Pro_ct">${cont}</h4><p class="Br_an_d">${Brand}</p>  <p class="R_te">${rate}</p><p class="Para_gh">${para}</p> <span class="d_t">${'&#8226'}</span> <span class="d_t">${'&#8226'}</span><button class="Btn_2">Add to Cart</button> </div></div></div> <script src="app.js"></script></body></html>`)

//    })
// })


// function btn(){
//       location.href="index.html"
// }







































//////-----------------------------Way 2---------------------





// let Hov_cont = document.querySelectorAll(".img_sec")
// // console.log(img_contain);

// var product_ = document.querySelector(".Pro_ct")
// var brand_ = document.querySelector(".Br_an_d")
// var rate_ = document.querySelector(".R_te")
// var para_ = document.querySelector(".Para_gh")
// var img_change_contain = document.querySelector("img")


// localStorage.setItem('value', JSON.stringify(store_obj));
// let val1 = localStorage.getItem('value');
// let parsedObj = JSON.parse(val1);
// console.log(parsedObj);


// product_.innerHTML = store_obj[0].Product
// brand_.innerHTML = store_obj[0].Brand
// rate_.innerHTML = store_obj[0].Rate
// para_.innerHTML = store_obj[0].Para_raph
// img_change_contain.src = store_obj[0].src


// Hov_cont.forEach((Hover, index) => {
//    Hover.addEventListener("click", function () {
//          location.href = "index1.html"

//          product_.innerHTML = parsedObj[index].Product
//          brand_.innerHTML = parsedObj[index].Brand
//          rate_.innerHTML = parsedObj[index].Rate
//          para_.innerHTML = parsedObj[index].Para_raph
//          img_change_contain.src = parsedObj[index].src
//       })
//    })





// let Input_value = document.querySelector("#searchInput");
// let Total_Img = document.querySelectorAll(".img_sec");

// Input_value.addEventListener("keyup", (e) => {
//   var Search_val = e.target.value.toLowerCase().trim();
//   Total_Img.forEach((Img, )=> {
//     const data = Img.dataset.item;
//     if (data.toLowerCase().includes(Search_val)) {
//       Img.style.display = "block";
//       Img.classList.add("Modify")
//     } else {
//       Img.style.display = "none";
//     }
//   });
// });

































































//-----------------------------way  ----2----------------------//

// let img_es = document.querySelectorAll(".img_es")

// console.log(img_es);

// let object = [{
//    "href": "HighBlackBeach.html"
// }, {
//    "href": "AlbanyTable.html"
// }, {
//    "href": "AccentChair.html"
// }, {
//    "href": "Woodentable.html"
// }, {
//    "href": "DinningTable.html"
// }, {
//    "href": "SofaSet.html"
// }, {
//    "href": "ModernBookslif.html"
// }, {
//    "href": "EmperorBed.html"
// }, {
//    "href": "UtopioSofa.html"
// }]


// img_es.forEach((img_tch,index)=>{
//    img_tch.addEventListener("click",()=>{
//          location.href=object[index].href
//    })
// })




//-------------------------------------Way 1--------------------


// img_es.forEach((img_tch, index) => {
//    img_tch.addEventListener("click", () => {
//       if (index == 0) {
//          location.href = "HighBlackBeach.html"
//       }
//       else if (index == 1) {
//          location.href = "AlbanyTable.html"
//       }
//       else if (index == 2) {
//          location.href = "AccentChair.html"
//       }
//       else if (index == 3) {
//          location.href = "Woodentable.html"
//       }
//       else if (index == 4) {
//          location.href = "DinningTable.html"
//       }
//       else if (index == 5) {
//          location.href = "SofaSet.html"
//       }
//       else if (index == 6) {
//          location.href = "ModernBookslif.html"
//       }
//       else if (index == 7) {
//          location.href = "EmperorBed.html"
//       }
//       else{
//          location.href = "UtopioSofa.html"
//       }
//    })
// })

// var btn_back = document.querySelectorAll(".btn_clk")
// console.log(btn_back);


// btn_back.forEach((btn_) => {
//    btn_.addEventListener("click", () => {
//          location.href = "index.html"
//          btn_.classList.add("btn_tr_st_io_n")
//    })
// })

