"use script"


var users = JSON.parse(localStorage.getItem('users'));

var copylogin = false;
var bob = false;
let flogin = document.querySelector(".All")
let btReg = document.querySelector("#btr")
let btBtl = document.querySelector("#btbtl")
let fnm = document.querySelector("#nm")
let flg = document.querySelector("#lg")
let fpw = document.querySelector("#pw")
let frpw = document.querySelector("#rpw")
let fmes = document.querySelector("#mes")

btReg.addEventListener("click",Registration);


function Registration() {
    let lg = flg.value;
    let pw = fpw.value;
    let rpw = frpw.value;
    let nm = fnm.value;

for(const user of users){


        if(nm != "" && lg != "" && pw != "" && rpw != "" && pw == rpw) 
        {
            
            users.push({
                "pl":'user',
                "lg" : `${flg.value}`,
                "pw" : `${fpw.value}`,
                "name" : `${fnm.value}`})

            localStorage.setItem('users', JSON.stringify(users));
            
            fmes.innerHTML = "Registration is completed. Now you can back to the login screen"
            break;
        }
        else if (nm != "" && lg != "" && pw != rpw)
        {
            fmes.innerHTML = "Passwords mismatch"
            
        }
        else
        {
            fmes.innerHTML = "Fill in all the fields"
            
        }
        }
    }
    
        btBtl.addEventListener("click",BackToLogin);

        function BackToLogin() {

                document.location.href = "Login.html";
                }
            