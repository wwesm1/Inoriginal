const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');

let current = 0;

function goToSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');

  current = index;
}

// Auto rotate (normal loop 0 → 1 → 2 → 0)
setInterval(() => {
  current = (current + 1) % 3;   // 🔥 ONLY 3 slides
  goToSlide(current);
}, 4000);





