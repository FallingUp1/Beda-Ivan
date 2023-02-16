"use script"

var nickname = JSON.parse(localStorage.getItem('name'));

var comments = [
    {
        "pl" : "admin",
        "lg" : "FallingDown",
        "pw" : "1536",
        "name" : "Falling Down"
    },
    {
        "pl" : "user",
        "lg" : "KateLops",
        "pw" : "1234",
        "name" : "Kate Lops"
    }
    
];

let bt1 = document.querySelector("#bt1")
let bt2 = document.querySelector("#bt2")
let txtArea = document.querySelector("#txtArea")

let counter2 = 1
bt1.addEventListener("click",GoBack);

function GoBack() {
    document.location.href = "Login.html";
    }


bt2.addEventListener("click", comment)

function comment(){
    let txt = txtArea.value;
    
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    const image = document.createElement('img');
    
    
    div.className = "msg";
    div.id = "msg" + counter2;

    div2.className = "mpg";
    div2.id = "mpg" + counter2;
    
    h1.className = "h";
    image.className = "img";
    p.className = "p";

    h1.innerHTML = nickname;
    p.innerHTML = txt;

    document.body.append(div);
   
    image.src  = '/Resources/user-profile.png'

    document.querySelector('#msg' + counter2).appendChild(div2)
    document.querySelector('#msg' + counter2).appendChild(image)
    document.querySelector('#msg' + counter2).appendChild(h1)
    document.querySelector('#mpg' + counter2).appendChild(p)

    counter2++

}