"use strict";

// variables
let menuToggleButton = document.querySelector(".page-header__toggle");
let menu = document.querySelector(".page-header__nav");
let menuClosed = document.querySelector(".page-header__nav--closed");

// Close menu onload js

  menu.classList.add("page-header__nav--closed");



// Open and closed button and menu
menuToggleButton.onclick = function() {
  menuToggleButton.classList.toggle("page-header__toggle--hamburger");
  menu.classList.toggle("page-header__nav--closed");
};
