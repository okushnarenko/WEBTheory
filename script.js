document.getElementById(`collapse`).addEventListener(`click`, function () {
  document.getElementById(`dropdown`).classList.toggle("hidden");
  document.getElementById(`cover`).classList.toggle("hidden");
});
document.getElementById(`cover`).addEventListener(`click`, function () {
  document.getElementById(`dropdown`).classList.toggle("hidden");
  document.getElementById(`cover`).classList.toggle("hidden");
});

// Otrs variants priekš "hidden" toggle

// document.querySelectorAll(".collapse").forEach((item) => {
//   item.addEventListener("click", function () {
//     document.querySelectorAll(".cover").forEach((el) => {
//       el.classList.toggle("hidden");
//     });
//   });
// });
