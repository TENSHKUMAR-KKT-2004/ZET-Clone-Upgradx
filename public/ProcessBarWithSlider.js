const progressBar = document.querySelector('.progress');

function updateProgress(percent) {
  progressBar.style.width = `${percent}%`;
}

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let currentPercentage = 33.3;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  currentPercentage += 33.3;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
    currentPercentage = 33.3;
  }
  showSlide(currentSlide);
  updateProgress(currentPercentage);
}

setInterval(nextSlide, 4000);

showSlide(currentSlide);
updateProgress(currentPercentage);
