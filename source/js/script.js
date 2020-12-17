"use strict";

// variables
let menuToggleButton = document.querySelector(".page-header__toggle");
let menu = document.querySelector(".page-header__nav");
let menuClosed = document.querySelector(".page-header__nav--closed");
let header = document.querySelector(".page-header");

// Close menu onload js
menu.classList.add("page-header__nav--closed");

// Open and closed button and menu
menuToggleButton.onclick = function() {
  header.classList.toggle("page-header--menu-open");
  menuToggleButton.classList.toggle("page-header__toggle--hamburger");
  menu.classList.toggle("page-header__nav--closed");
};
