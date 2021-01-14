document.querySelectorAll("#navBtn, #cover").forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelectorAll("#dropdown, #cover").forEach((el) => {
      el.classList.toggle("hidden");
    });
  });
});

/* Garāks variants bez arrow function */

// document.getElementById(`navBtn`).addEventListener(`click`, function () {
//   document.getElementById(`dropdown`).classList.toggle("hidden");
//   document.getElementById(`cover`).classList.toggle("hidden");
// });
// document.getElementById(`cover`).addEventListener(`click`, function () {
//   document.getElementById(`dropdown`).classList.toggle("hidden");
//   this.classList.toggle("hidden");
// });
