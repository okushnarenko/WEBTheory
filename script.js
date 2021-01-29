"use strict";

document.querySelectorAll("#navBtn, #cover").forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelectorAll("#dropdown, #cover").forEach((el) => {
      el.classList.toggle("hidden");
    });
  });
});
