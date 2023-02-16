"use script"


let bt = document.querySelector("#bt")

bt.addEventListener("click",GoBack);

function GoBack() {
    document.location.href = "Login.html";
    }