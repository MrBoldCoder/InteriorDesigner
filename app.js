"use strict";

/*SMOOTH SCROOLING*/
const section0 = document.querySelector(`.abmetxt`);
const btnsrcl = document.querySelector(`.bb`);
btnsrcl.addEventListener("click", function (e) {
  section0.scrollIntoView({ behavior: "smooth" });
});

const section3 = document.querySelector(`.contactme`);
const btnsrcl3 = document.querySelector(`.ee`);
btnsrcl3.addEventListener("click", function (e) {
  section3.scrollIntoView({ behavior: "smooth" });
});
const section4 = document.querySelector(`.landing`);
const btnsrcl4 = document.querySelector(`.dd`);
btnsrcl4.addEventListener("click", function (e) {
  section4.scrollIntoView({ behavior: "smooth" });
});
const section1 = document.querySelector(`.portfoliotxt`);
const btnsrcl1 = document.querySelector(`.cc`);
btnsrcl1.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

/*//////////////////////////////////////////////////////////////////////////////*/

/*STICKY HEADER//////////////////////////*/
window.onscroll = function () {
  myFunction();
};

const header = document.querySelector(".headermobile");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/*//////////////////////////////////////////////////////////////////*

/*MOBILE HEADER NAVIGATION WORKS///////////////////////////////*/

const element = document.getElementById("ultra");
const elementas = document.getElementById("abcd");
const elementas1 = document.getElementById("abcd1");
const elementas2 = document.getElementById("abcd2");

const menu = document.querySelector(".ulmobile");
const menuItems = document.querySelectorAll(".aa");
const hamburger = document.querySelector(".btn-mobile-nav");
const closeIcon = document.querySelector(".close");
const menuIcon = document.querySelector(".open");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    element.classList.remove("ulmobilenav");
    elementas.classList.remove("aaa");
    elementas1.classList.remove("aaa");
    elementas2.classList.remove("aaa");
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    element.classList.add("ulmobilenav");
    elementas.classList.add("aaa");
    elementas1.classList.add("aaa");
    elementas2.classList.add("aaa");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

/*///////////////////////////////////////////////////////////////////*/

/* IMAGE GALLERY*/ /////////////////////////////////////////////////////

document.querySelector(".kitchen").addEventListener("click", function () {
  document.getElementById("1img").src = "kt1.jpg";
  document.getElementById("2img").src = "kt2.jpg";
  document.getElementById("3img").src = "kt3.jpg";
  document.getElementById("4img").src = "kt4.jpg";
  document.getElementById("5img").src = "kt5.jpg";
  document.getElementById("6img").src = "kt6.jpg";
  document.getElementById("7img").src = "kt7.jpg";
  document.getElementById("8img").src = "kt8.jpg";
  document.getElementById("9img").src = "kt9.jpg";
  document.getElementById("10img").src = "kt10.jpg";
});
document.querySelector(".bedroom").addEventListener("click", function () {
  document.getElementById("1img").src = "bed1.jpg";
  document.getElementById("2img").src = "bed2.jpg";
  document.getElementById("3img").src = "bed3.jpg";
  document.getElementById("4img").src = "bed4.jpg";
  document.getElementById("5img").src = "bed5.jpg";
  document.getElementById("6img").src = "bed6.jpg";
  document.getElementById("7img").src = "bed7.jpg";
  document.getElementById("8img").src = "bed8.jpg";
  document.getElementById("9img").src = "bed9.jpg";
  document.getElementById("10img").src = "bed10.jpg";
});
document.querySelector(".livingroom").addEventListener("click", function () {
  document.getElementById("1img").src = "liv1.jpg";
  document.getElementById("2img").src = "liv2.jpg";
  document.getElementById("3img").src = "liv3.jpg";
  document.getElementById("4img").src = "liv4.jpg";
  document.getElementById("5img").src = "liv5.jpg";
  document.getElementById("6img").src = "liv6.jpg";
  document.getElementById("7img").src = "liv7.jpg";
  document.getElementById("8img").src = "liv8.jpg";
  document.getElementById("9img").src = "liv9.jpg";
  document.getElementById("10img").src = "liv10.jpg";
});
