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

document.getElementById("CartSlide").innerHTML = "hellloo bhai me chal raha hu";
