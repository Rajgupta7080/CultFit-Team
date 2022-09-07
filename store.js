import { crousel, getdata, navbar, showdata } from "./utility.js";

document.getElementById("navbar").innerHTML = navbar;
document.getElementById("crousel").innerHTML = crousel;
// ********** Product Data**************
const bestseller = await getdata("bestseller");
showdata(bestseller, "BESTSELLERS", "LOVED BY CULT MEMBERS");
const Just_launched = await getdata("Just_launched");
showdata(Just_launched, "JUST LAUNCHED", "NEW ARRIVALS");
const Trade_mills = await getdata("Trade_mills");
showdata(Trade_mills, "TREADMILLS", "LOVED BY CULT MEMBERS");
const SPINBIKES = await getdata("SPINBIKES");
showdata(SPINBIKES, "SPINBIKES", "LOVED BY CULT MEMBERS");
const Cycles = await getdata("Cycles");
showdata(Cycles, "CYCLES", "LOVED BY CULT MEMBERS");

//*****************NAvbar options*********** */

const goto = () => {
  window.location = "mens.html";
  console.log("mee");
};
document.getElementById("men").addEventListener("click", goto);
document.getElementById("men1").addEventListener("click", goto);