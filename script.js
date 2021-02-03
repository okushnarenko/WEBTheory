"use strict";

document.querySelectorAll("#navBtn, #cover").forEach((e) => {
  e.addEventListener("click", function () {
    document.querySelectorAll("#dropdown, #cover").forEach((el) => {
      el.classList.toggle("hidden");
    });
  });
});

// (Reinis) iesniegt Atbildi poga:
document.querySelector(".for-fun").addEventListener("submit", function (event) {
  // event.preventDefault();
  let question = document.getElementById("questionText").innerText;
  console.log(question); /* var izdzēst pēc testēšanas */
  let answer = this.querySelector("input[name = answer]:checked").value;
  console.log(answer); /* var izdzēst pēc testēšanas */
  sessionStorage.setItem(question, answer);
  /* varam izvēlēties glabāt Session Storage vai Local Storage */
  localStorage.setItem(question, answer);
});
