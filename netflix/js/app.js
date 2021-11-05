const questionBoxes = document.querySelectorAll(".question-box");

questionBoxes.forEach((el, idx) => {
  const myEl = el.nextElementSibling;
  el.addEventListener("click", (e) => {
    if (!myEl.classList.contains("question-answer--show")) {
      myEl.classList.add("question-answer--show");
    } else {
      myEl.classList.remove("question-answer--show");
    }
  });
});
