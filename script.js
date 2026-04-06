// get all drum kit elements

let clapEl = document.getElementById("clap-el");
let hihatEl = document.getElementById("hihat-el");
let kickEl = document.getElementById("kick-el");
let openhatEl = document.getElementById("openhat-el");
let boomEl = document.getElementById("boom-el");
let rideEl = document.getElementById("ride-el");
let snareEl = document.getElementById("snare-el");
let tomEl = document.getElementById("tom-el");
let tinkEl = document.getElementById("tink-el");

// listen to all button clicks

clapEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/clap-effect.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});

hihatEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/HiHat-effect.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});

kickEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/Kick-effect.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});

openhatEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/OpenHat.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});

boomEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/boom-effect.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});

rideEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/Ride-effect.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});

snareEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/Snare-effect.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});

tomEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/Tom-effect.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});

tinkEl.addEventListener("click", () => {
  let audioInsance = new Audio("audios/Tink-effect.mp3");
  //   Reset sound to start if clicked quickly
  audioInsance.currentTime = 0;
  audioInsance.play();
});
