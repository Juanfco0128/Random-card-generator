/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};
let suit = ["♥", "♦", "♣", "♠"];
let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let suit2 = suit[Math.floor(Math.random() * suit.length)];

document.querySelector(".suit").innerHTML = suit2;

document.querySelector(".number").innerHTML =
  number[Math.floor(Math.random() * number.length)];

document.querySelector(".suit2").innerHTML = suit2;
