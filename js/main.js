"use strict";

let menuBtn = document.querySelector(".headerNavigation_button");
let menu = document.querySelector(".headerNavigation_hidden");
// let fixedBody = document.querySelector(".scrollOn");
let mobileMenuBtn = document.querySelectorAll(".js-link");

const $titleLink = [...document.querySelectorAll(".js-scrollLink")];

const hideMenu = () => {
  menuBtn.classList.toggle("headerNavigation_button_active");
  menu.classList.toggle("active");
  document.body.classList.toggle("scrollOff");
};
menuBtn.addEventListener("click", hideMenu);

mobileMenuBtn.forEach((item) => item.addEventListener("click", hideMenu));

const handleTitle = (event) => {
  event.preventDefault();
  const href = event.target.getAttribute("href");
  const elem = document.querySelector(href);

  document.documentElement.scrollTo({
    top: elem.offsetTop,
    behavior: "smooth",
  });
};

$titleLink.forEach((elem) => elem.addEventListener("click", handleTitle));
