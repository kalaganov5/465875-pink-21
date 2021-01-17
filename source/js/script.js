"use strict";
// HEADER
// variables
let menuToggleButton = document.querySelector(".page-header__toggle");
let menuClosed = document.querySelector(".page-header__nav--closed");
let header = document.querySelector(".page-header");

// show .page-header__toggle only support js
menuToggleButton.classList.add("support-js");

// hide menu with support js
header.classList.add("page-header--closed");

// Open and closed button and menu
menuToggleButton.onclick = function(evt) {
  evt.preventDefault();
  menuToggleButton.classList.toggle("page-header__toggle--hamburger");
  header.classList.toggle("page-header--closed");
};

// popup
document.addEventListener("DOMContentLoaded", function() {
  let submitForm = document.querySelector(".competition__form ");
  let popup = document.querySelector(".popup-form");
  let popupClose = document.querySelectorAll(".popup-form__button");

  submitForm.onsubmit = function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-form--active-form-send");
  }

  for (let i = 0; i <= popupClose.length; i++) {
    popupClose[i].onclick = function(evt) {
      evt.preventDefault();
      if (popup.classList.contains("popup-form--active-form-error")) {
        popup.classList.remove("popup-form--active-form-error");
      }
      if (popup.classList.contains("popup-form--active-form-send")) {
        popup.classList.remove("popup-form--active-form-send");
      }
    }
  };
});


// map
let mapBlock = document.querySelector(".footer__map");
mapBlock.classList.add("footer__map-js");
