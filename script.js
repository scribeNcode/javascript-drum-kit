window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
});

// // get all drum kit elements

// let clapEl = document.getElementById("clap-el");
// let hihatEl = document.getElementById("hihat-el");
// let kickEl = document.getElementById("kick-el");
// let openhatEl = document.getElementById("openhat-el");
// let boomEl = document.getElementById("boom-el");
// let rideEl = document.getElementById("ride-el");
// let snareEl = document.getElementById("snare-el");
// let tomEl = document.getElementById("tom-el");
// let tinkEl = document.getElementById("tink-el");

// // function to play sound and add animation

// function playSound(element, path) {
//   let audioInsance = new Audio(path);
//   //   Reset sound to start if clicked quickly
//   audioInsance.currentTime = 0;
//   audioInsance.play();
//   //   add animation effect with playing class
//   element.classList.add("playing");

//   // Remove it after 100ms so the "flash" ends
//   setTimeout(() => {
//     element.classList.remove("playing");
//   }, 100);
// }

// // listen to all button clicks

// clapEl.addEventListener("click", () =>
//   playSound(clapEl, "audios/clap-effect.mp3"),
// );

// hihatEl.addEventListener("click", () =>
//   playSound(hihatEl, "audios/HiHat-effect.mp3"),
// );

// kickEl.addEventListener("click", () =>
//   playSound(kickEl, "audios/Kick-effect.mp3"),
// );

// openhatEl.addEventListener("click", () =>
//   playSound(openhatEl, "audios/OpenHat.mp3"),
// );

// boomEl.addEventListener("click", () =>
//   playSound(boomEl, "audios/boom-effect.mp3"),
// );

// rideEl.addEventListener("click", () =>
//   playSound(rideEl, "audios/Ride-effect.mp3"),
// );

// snareEl.addEventListener("click", () =>
//   playSound(snareEl, "audios/Snare-effect.mp3"),
// );

// tomEl.addEventListener("click", () =>
//   playSound(tomEl, "audios/Tom-effect.mp3"),
// );

// tinkEl.addEventListener("click", () =>
//   playSound(tinkEl, "audios/Tink-effect.mp3"),
// );
