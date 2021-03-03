"use strict";

document.querySelectorAll("#navBtn, #cover").forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelectorAll("#dropdown, #cover").forEach((el) => {
      el.classList.toggle("hidden");
    });
  });
});

// (Reinis) iesniegt Atbildi poga:
document
  .querySelector(".right-side-main-form")
  .addEventListener("submit", function (event) {
    // event.preventDefault();
    let question = document.getElementById("questionText").innerText;
    let answer = this.querySelector("input[name = answer]:checked").value;
    sessionStorage.setItem(question, answer);
    /* varam izvēlēties glabāt Session Storage vai Local Storage */
    localStorage.setItem(question, answer);
    console.log(question, answer); /* var izdzēst pēc testēšanas */
  });

// (Olga) Circle Progress Bar
const circle = document.querySelector(".progress-ring");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

setProgress(33);