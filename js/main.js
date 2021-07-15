'use strict'
let menuBtn = document.querySelector('.headerNavigation_button');
let menu = document.querySelector('.headerNavigation_Menu');

let hideMenu = () => {
    menuBtn.classList.toggle('headerNavigation_button_active');
    menu.classList.toggle('headerNavigation_hidden');
}

menuBtn.addEventListener('click', hideMenu);



