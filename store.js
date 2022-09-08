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
const showCart = (data) => {
  document.getElementById("CartSlide").innerHTML = "";
  let finalPrice = 0;
  data.map((elem) => {
    document.getElementById("CartSlide").innerHTML += `<hr />
          <div>
            <img src="${elem.img}" alt="" />
            <div>
              <h4>${elem.cname}</h4>
              <p>${elem.title}</p>
              <p>Size: ${elem.size}</p>
              <p>₹ ${elem.price}</p>
              <div>
                <p id="minus">-</p>
                <p id="quantity">1</p>
                <p id="plus">+</p>
              </div>
            </div>
          </div>
          <hr>`;

    finalPrice += elem.price;
  });
  console.log(finalPrice);
  localStorage.setItem("FinalAmount", finalPrice);
};
showCart(JSON.parse(localStorage.getItem("cartdata")) || []);
const arr2 = JSON.parse(localStorage.getItem("cartdata")) || [];
document.getElementById("cartno").innerText = arr2.length;
