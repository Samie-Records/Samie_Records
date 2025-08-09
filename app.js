const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



/* Carousel */
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
}

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

// Initial position
updateSlidePosition();

