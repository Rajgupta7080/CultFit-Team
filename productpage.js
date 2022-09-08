import { navbar } from "./utility.js";

document.getElementById("navbar").innerHTML = navbar;
const data = JSON.parse(localStorage.getItem("Product"));
console.log(data);
