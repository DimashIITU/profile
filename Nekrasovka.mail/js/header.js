let headerBurger = document.getElementById('header__burger');
let menu         = document.getElementById("menu");
const body       = document.querySelector("body");

headerBurger.onclick = () => {
    headerBurger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
}