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
let circle = document.querySelector("circle");
let circumference = 2 * Math.PI * circle.r.baseVal.value;
circle.style.strokeDasharray = `${circumference} 1000`;

function setProgress(percent) {
  circle.style.strokeDashoffset = circumference * (1 - percent / 100);
  let pct = document.querySelector("text");
  pct.innerHTML = percent.toFixed(0) + "%";
}

requestAnimationFrame(draw);

function draw(t) {
  requestAnimationFrame(draw);
  let percentage = 33;
  setProgress((t / 100) % percentage);
}