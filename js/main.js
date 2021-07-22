'use strict'

let menuBtn = document.querySelector('.headerNavigation_button');
let menu = document.querySelector('.headerNavigation_hidden');
let fixedBody = document.querySelector('.scrollOn');
let mobileMenuBtn = document. querySelectorAll('.js-link');

let hideMenu = () => {
    menuBtn.classList.toggle('headerNavigation_button_active');
    menu.classList.toggle('active');
    fixedBody.classList.toggle('scrollOff');
}
menuBtn.addEventListener('click', hideMenu);

mobileMenuBtn.forEach(item => (
    item.addEventListener('click', hideMenu)
));
