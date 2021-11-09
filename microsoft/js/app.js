const slider = document.querySelector(".slider");
const wrapper = slider.querySelector(".slider-wrapper");

const sliderPrevBtn = slider.querySelector(".slider-action--prev");
const sliderNextBtn = slider.querySelector(".slider-action--next");

let currentSlide = 1;

sliderNextBtn.addEventListener("click", () => {
  if (currentSlide == 1) {
    wrapper.querySelector(`.slide-${currentSlide}`).style.opacity = 0;
    wrapper.querySelector(`.slide-${currentSlide + 1}`).style.opacity = 1;
    currentSlide++;
  } else {
    wrapper.querySelector(`.slide-${currentSlide}`).style.opacity = 0;
    wrapper.querySelector(`.slide-${currentSlide - 1}`).style.opacity = 1;
    currentSlide--;
  }
});
