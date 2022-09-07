
// document.querySelector("form").addEventListener("submit", addcrd);
var arr=JSON.parse(localStorage.getItem("login"))||[];
function adduser(){
    event.preventDefault();

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    var phone=document.querySelector("#phone").value;
    console.log( email, password, phone);
    var ans = false;
    for(var i=0; i<arr.length; i++) {
        if(arr[i].email==email && arr[i].password == password && arr[i].phone==phone) {
            ans = true;
            break;
        }
        
    }
    if(email =="" || password == "" || phone =="") {
        alert("You have written incorrect email or password or phone");
    }
    else if(ans) {
        alert("Login Successful");
        location.href="../mainpage.html"
    }else {
        alert("You have written incorrect email or password or phone");
    }

}

document.getElementById("account").addEventListener("click",displaySignup)
function displaySignup() {
    event.preventDefault();
    location.href="./signup.html";
}