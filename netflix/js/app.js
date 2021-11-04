const questionToggleButtons = document.querySelectorAll(".question-close");
const questionAnswers = document.querySelectorAll(".question-answer");
/**
 *
 * if q1 is toggled answer1 must be toggled
 * if questionToggleButton is clicked
 *      --> close all
 *      --> open the clicked one
 */

console.log(questionToggleButtons);

questionToggleButtons.forEach((el, index) => {
  el.addEventListener("click", (event) => {
    if (questionAnswers[index].classList.contains("question-answer--show")) {
      return questionAnswers[index].classList.remove("question-answer--show");
    }
    questionAnswers.forEach((ansEl) => {
      if (ansEl.classList.contains("question-answer--show")) {
        ansEl.classList.remove("question-answer--show");
      }

      questionAnswers[index].classList.add("question-answer--show");
    });
  });
});
