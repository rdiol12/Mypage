alert("ה-AI היחיד פה זה התמונות כל השאר זה יזע דם ודמעות");

let first_btn = document.getElementById("first-btn");

let first_img = document.getElementById("lamp");
let second_img = document.getElementById("lamp2");
let last_img = document.getElementById("lamp3");

let btn_lamp = document.getElementById("lamp_btn");
let btn_lamp1 = document.getElementById("lamp_btn2");
let btn_lamp2 = document.getElementById("lamp_btn3");
var flag_red = true;
var flag_green = true;
var flag_grey = true;
first_btn.addEventListener("click", function () {
  alert("under construction");
});
btn_lamp.addEventListener("click", function () {
  if (flag_red) {
    first_img.src = "./asset/red-lamp.png";
    flag_red = false;
  } else {
    first_img.src = "./asset/lamp-img.png";
    flag_red = true;
  }
});

btn_lamp1.addEventListener("click", function () {
  if (flag_grey) {
    second_img.src = "./asset/grey-lamp.png";
    flag_grey = false;
  } else {
    second_img.src = "./asset/lamp-img2.png";
    flag_grey = true;
  }
});

btn_lamp2.addEventListener("click", function () {
  if (flag_green) {
    last_img.src = "./asset/green-lamp.png";
    flag_green = false;
  } else {
    last_img.src = "./asset/lamp-img3.png";
    flag_green = true;
  }
});
