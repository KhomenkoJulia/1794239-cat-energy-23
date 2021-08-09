let rangeSlider = document.querySelector('.slider__range');
let sliderItemBefore = document.querySelector('.slider__item--before');

function moveSlider() {
  sliderItemBefore.style.width = rangeSlider.value + "%";
}
