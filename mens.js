import {
  crousel,
  getdata,
  navbar,
  showdata,
  showdataformen,
} from "./utility.js";

document.getElementById("navbar").innerHTML = navbar;
document.getElementById("crousel").innerHTML = crousel;
const gotohome = () => {
  console.log("first");
  window.location = "store.html";
};
document.getElementById("home").addEventListener("click", gotohome);
document.getElementById("home1").addEventListener("click", gotohome);

const mens = await getdata("Mens");
console.log(mens);

showdataformen(mens);
