import {
  beforeshowdata,
  crousel,
  getdata,
  navbar,
  showdata,
} from "./utility.js";

document.getElementById("navbar").innerHTML = navbar;
document.getElementById("crousel").innerHTML = crousel;
const DisplayProduct = (elem) => {
  console.log(elem);
};
// ********** Product Data**************
beforeshowdata("BESTSELLERS", "LOVED BY CULT MEMBERS", "bestseller");
const bestseller = await getdata("bestseller");
showdata(bestseller, "BESTSELLERS", "LOVED BY CULT MEMBERS", "bestseller");

beforeshowdata("JUST LAUNCHED", "NEW ARRIVALS", "Just_launched");
const Just_launched = await getdata("Just_launched");
showdata(Just_launched, "JUST LAUNCHED", "NEW ARRIVALS", "Just_launched");

beforeshowdata("TREADMILLS", "LOVED BY CULT MEMBERS", "Trade_mills");
const Trade_mills = await getdata("Trade_mills");
showdata(Trade_mills, "TREADMILLS", "LOVED BY CULT MEMBERS", "Trade_mills");

beforeshowdata("SPINBIKES", "LOVED BY CULT MEMBERS", "SPINBIKES");
const SPINBIKES = await getdata("SPINBIKES");
showdata(SPINBIKES, "SPINBIKES", "LOVED BY CULT MEMBERS", "SPINBIKES");

beforeshowdata("CYCLES", "LOVED BY CULT MEMBERS", "Cycles");
const Cycles = await getdata("Cycles");
showdata(Cycles, "CYCLES", "LOVED BY CULT MEMBERS", "Cycles");

//*****************NAvbar options*********** */

const goto = () => {
  window.location = "mens.html";
  console.log("mee");
};
document.getElementById("men").addEventListener("click", goto);
document.getElementById("men1").addEventListener("click", goto);

//document.getElementById("CartSlide").innerHTML = "hellloo bhai me chal raha hu";
// const val = async () => {
// };

const arr = JSON.parse(localStorage.getItem("cartdata")) || [];
document.getElementById("cartno").innerText = arr.length;

let finalPrice = 0;
const showCart = (data) => {
  document.getElementById("CartSlide").innerHTML = "";
  finalPrice = 0;
  data.map(function (elem, id) {
    let id2 = id + "p";
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
    minus.setAttribute("id", `${id + "m"}`);
    minus.style.cursor = "pointer";
    const quantity = document.createElement("p");
    quantity.innerText = "1";
    quantity.setAttribute("id", `${id + "q"}`);
    const plus = document.createElement("p");
    plus.innerText = "+";
    plus.setAttribute("id", `${id2}`);
    plus.style.cursor = "pointer";
    const hr2 = document.createElement("hr");
    plusminusdiv.append(minus, quantity, plus);
    datadiv.append(h4, title, size, price, plusminusdiv);
    div.append(img, datadiv);
    div.addEventListener("click", () => {
      console.log("meee");
    });
    document.getElementById("CartSlide").append(hr1, div, hr2);
    {
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
    }
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
const minusItem = (id) => {
  let q = document.getElementById(`${id + "q"}`).innerText;
  q--;

  if (q < 1) {
    console.log("ab muje dlete kar do");
    arr.splice(id, 1);
    localStorage.setItem("cartdata", JSON.stringify(arr));
    showCart(arr);
    addidtoallitem(arr);
  } else {
    finalPrice = finalPrice - arr[id].price;
    localStorage.setItem("FinalAmount", finalPrice);
    document.getElementById("totalprice").innerText = "₹ Total : " + finalPrice;
    document.getElementById(`${id + "q"}`).innerText = q;
  }
};
const plusItem = (id) => {
  let q = document.getElementById(`${id + "q"}`).innerText;
  q++;
  finalPrice = finalPrice + arr[id].price;
  localStorage.setItem("FinalAmount", finalPrice);
  document.getElementById("totalprice").innerText = "₹ Total : " + finalPrice;
  document.getElementById(`${id + "q"}`).innerText = q;
};

const addidtoallitem = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    document.getElementById(`${i + "m"}`).addEventListener("click", () => {
      console.log(event.target.id[0]);
      minusItem(event.target.id[0]);
    });
    document.getElementById(`${i + "p"}`).addEventListener("click", () => {
      console.log(event.target.id[0]);
      plusItem(event.target.id[0]);
    });
  }
};
showCart(arr);
addidtoallitem(arr);

document.getElementById("buynow").addEventListener("click", () => {
  window.location = "form.html";
});
