



var product_ = document.querySelector(".Pro_ct")
var brand_ = document.querySelector(".Br_an_d")
var rate_ = document.querySelector(".R_te")
var para_ = document.querySelector(".Para_gh")
var img_change_contain = document.querySelector("img")




let object = localStorage.getItem("obj");
let objstr = JSON.parse(object);


img_change_contain.src = objstr.src;
product_.innerHTML = objstr.Product;
brand_.innerHTML = objstr.Brand;
para_.innerHTML = objstr.Para_raph;
rate_.innerHTML = objstr.Rate;


var btn=document.getElementById("btn_1")


btn.addEventListener("click", () => {
      location.href = "index.html"
})


