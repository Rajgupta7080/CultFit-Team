import { navbar } from "./utility.js";

document.getElementById("navbar").innerHTML = navbar;
const goto = () => {
  window.location = "mens.html";
  console.log("mee");
};
const gotohome = () => {
  window.location = "store.html";
  console.log("mee");
};
document.getElementById("men").addEventListener("click", goto);
document.getElementById("men1").addEventListener("click", goto);
document.getElementById("home").addEventListener("click", gotohome);

document.getElementById("home1").addEventListener("click", gotohome);

const data = JSON.parse(localStorage.getItem("Product"));
console.log(data);

const showproductdata = (data) => {
  document.getElementById(
    "details"
  ).innerHTML = `<div class="brand">${data.cname}</div>
        <div class="titleLogo">${data.title}</div>
        <div class="price-container">
          <p class="price">₹${data.price}</p>
          <p class="price listing-price">₹${data.strikePrice}</p>
          <p class="discount-text">${data.discount}% Off </p>
        </div>
        <div class="bottom-text">
          <p>${data.desc}</p>
        </div>
        <div class="product-size">
          <div class="title">Choose Size <span style="color:#ff3278 ;">(Size Guide)</span></div>
          <div class="size-container">
            <div id="size" >S</div>
            <div id="size1">M</div>
            <div id="size2">L</div>
            <div id="size3">XL</div>
            <div id="size4">XXL</div>
          </div>
        </div>
        <div class="actions-container">
          <a href="#">
            <div id="AddToCart">Add to Cart</div>
          </a>
          <a href="#">
            <div class="">View Cart</div>
          </a>
        </div>
        <div class="product-detail-title">
          PRODUCT DETAILS
        </div>
        <div class="product-desc">
          
        </div>
        <hr id="vline">
        <div class="deliverAddress">
          <div class="header">
            <div>
              <div class="title">Deliver to OTHER - 223103</div>
              <div class="sub-title">Shahganj , JNP, Jaunpur, Uttar Pradesh - 223103 ...</div>
            </div>
            <div class="change">CHANGE</div>
          </div>
          <ul class="loc-info">
            <li class="info-item"> Free delivery by<span class="bold"> Wednesday, 14th
                September</span></li>
            <li class="info-item"> Easy 30 days return available</li>
            <li class="info-item"> 30 days exchange available</li>
            <li class="info-item"> Pay on delivery available</li>
          </ul>
        </div>`;
};
const porductDESC = (data) => {
  const ul = document.createElement("ul");
  data.map((elem) => {
    const li = document.createElement("li");
    li.innerText = elem;
    ul.append(li);
  });
  document.querySelector(".product-desc").append(ul);
};
const showImages = (data) => {
  console.log(data.img2);
  document.getElementById(
    "products"
  ).innerHTML = `<img src="${data.img1}.jpg" alt="" />
    <img src="${data.img2}.jpg" alt="" />

    <img src="${data.img3}.jpg" alt="" />
    <img src="${data.img4}.jpg" alt="" />
    <img src="${data.img5}.jpg" alt="" />
    <img src="${data.img6}.jpg" alt="" />`;
};
function size(CLASS) {
  document.getElementById("size").style.backgroundColor = "white";
  document.getElementById("size").style.color = "black";
  document.getElementById("size1").style.backgroundColor = "white";
  document.getElementById("size1").style.color = "black";
  document.getElementById("size2").style.backgroundColor = "white";
  document.getElementById("size2").style.color = "black";
  document.getElementById("size3").style.backgroundColor = "white";
  document.getElementById("size3").style.color = "black";
  document.getElementById("size4").style.backgroundColor = "white";
  document.getElementById("size4").style.color = "black";

  document.getElementById(CLASS).style.backgroundColor = "red";
  document.getElementById(CLASS).style.color = "white";
  let size = event.target.innerText;
  localStorage.setItem("size", size);
  console.log(size);
}

showproductdata(data);

porductDESC(data.DETAILS);
showImages(data);

document.querySelector("#size").addEventListener("click", () => {
  size("size");
});
document.querySelector("#size1").addEventListener("click", () => {
  size("size1");
});
document.querySelector("#size2").addEventListener("click", () => {
  size("size2");
});
document.querySelector("#size3").addEventListener("click", () => {
  size("size3");
});
document.querySelector("#size4").addEventListener("click", () => {
  size("size4");
});

document.getElementById("AddToCart").addEventListener("click", AddToCart);
const arr = JSON.parse(localStorage.getItem("cartdata")) || [];
function AddToCart() {
  let obj = {};
  obj.id = data.id;
  obj.img = data.thumbnail;
  obj.cname = data.cname;
  obj.title = data.title;
  obj.size = localStorage.getItem("size");
  obj.price = data.price;
  arr.push(obj);
  localStorage.setItem("cartdata", JSON.stringify(arr));
  showCart(arr);
}

const showCart = (data) => {
  document.getElementById("CartSlide").innerHTML = "";
  let finalPrice = 0;
  data.map((elem) => {
    const hr1 = document.createElement("hr");
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", `${elem.img}`);
    const datadiv = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.innerText = elem.cname;
    const title = document.createElement("p");
    title.innerText = elem.title;
    const size = document.createElement("p");
    size.innerText = elem.size;
    const price = document.createElement("p");
    price.innerText = "" + elem.price;
    const plusminusdiv = document.createElement("div");
    const minus = document.createElement("p");
    minus.innerText = "-";
    minus.addEventListener("click", () => {
      mainhu(elem);
    });
    const quantity = document.createElement("p");
    quantity.innerText = "1";
    const plus = document.createElement("p");
    plus.innerText = "+";
    plus.addEventListener("click", () => {
      console.log("mmdmmd");
    });
    const hr2 = document.createElement("hr");
    plusminusdiv.append(minus, quantity, plus);
    datadiv.append(h4, title, size, price, plusminusdiv);
    div.append(img, datadiv);
    document.getElementById("CartSlide").append(hr1, div, hr2);
    // document.getElementById("CartSlide").innerHTML += `<hr />
    //       <div>
    //         <img src="${elem.img}" alt="" />
    //         <div>
    //           <h4>${elem.cname}</h4>
    //           <p>${elem.title}</p>
    //           <p>Size: ${elem.size}</p>
    //           <p>₹ ${elem.price}</p>
    //           <div>
    //             <p id="minus">-</p>
    //             <p id="quantity">1</p>
    //             <p id="plus">+</p>
    //           </div>
    //         </div>
    //       </div>
    //       <hr>`;

    finalPrice += elem.price;
  });
  console.log(finalPrice);
  localStorage.setItem("FinalAmount", finalPrice);
  document.getElementById("cartno").innerText = arr.length;
  document.getElementById("CartSlide").innerHTML += ` 
<div id="total">
  <p id="totalprice">₹ Total : ${finalPrice}</p>
  <button id="buynow">BUY NOW</button>
    </div>`;
};

showCart(arr);

// document.getElementById("minus").addEventListener("click", () => {
//   console.log("mmdmmd");
// });
const mainhu = (elem) => {
  console.log(elem);
};
