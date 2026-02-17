const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');
const next = document.querySelector('.hero__arrow--right');
const prev = document.querySelector('.hero__arrow--left');

let current = 0;
let timer;

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

next.onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
  resetTimer();
};

prev.onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
  resetTimer();
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    current = i;
    showSlide(current);
    resetTimer();
  };
});

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => next.click(), 6000);
}

resetTimer();