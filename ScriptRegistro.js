document.getElementById("btnRegister").addEventListener("click", register);
document.getElementById("btnLogin").addEventListener("click", login);
window.addEventListener("resize",ancho)

var divLoginRegister = document.querySelector(".divLoginRegister")
var formularioLogin = document.querySelector(".formularioLogin");
var formularioRegister = document.querySelector(".formularioRegistro");
var cajaBGLogin = document.querySelector(".cajaBGLogin");
var cajaBGRegister = document.querySelector(".cajaBGRegister");
function ancho() {
    if (window.innerWidth > 850) {
        cajaBGLogin.style.display = "block";
        cajaBGRegister.style.display = "block";

    }
    else {
        cajaBGRegister.style.display = "block";
        cajaBGRegister.style.opacity = "1";
        cajaBGLogin.style.display = "none";
        formularioLogin.style.display = "block";
        formularioRegister.style.display = "none";
        divLoginRegister.style.left = "0px";
    }
}
ancho();
function register() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "block";
        divLoginRegister.style.left = "410px";
        formulariLogin.style.display = "none";
        cajaBGRegister.style.opacity = "0";
        cajaBGLogin.style.opacity = "1";
    }
    else {
        formularioRegister.style.display = "block";
        divLoginRegister.style.left = "0px";
        formularioLogin.style.display = "none";
        cajaBGRegister.style.display = "none";
        cajaBGLogin.style.display = "block";
        cajaBGLogin.style.opacity = "1";
    }
}
function login() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "none";
        divLoginRegister.style.left = "10px";
        formularioLogin.style.display = "block";
        cajaBGRegister.style.opacity = "0";
        cajaBGRegister.style.opacity = "1";
    }
    else {
        formularioRegister.style.display = "none";
        divLoginRegister.style.left = "0px";
        formularioLogin.style.display = "block";
        cajaBGRegister.style.display = "block";
        cajaBGLogin.style.display = "none";
    }
}