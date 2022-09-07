document.querySelector("form").addEventListener("submit", adduser);
var arr = JSON.parse(localStorage.getItem("login")) || [];
function adduser(){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    var phone=document.querySelector("#phone").value;

    var data= {name: name, email: email, password: password, phone: phone};
    arr.push(data)
    localStorage.setItem("login",JSON.stringify(arr));
    window.location.href="signin.html";
}