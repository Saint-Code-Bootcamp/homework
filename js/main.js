'use strict'

let btn = document.querySelector('.headerNavigation_button');
let mobileMenu = document.querySelector('.headerNavigation_hidden');

function changeIcon() {
    btn.classList.toggle('active');
}

function showMobileMenu() {
    mobileMenu.style = 'display: block';
}

btn.addEventListener("click", changeIcon);
btn.addEventListener("click", showMobileMenu);
