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

setInterval(() => {
  current = (current + 1) % 3;  
  goToSlide(current);
}, 4000);

  const row = document.querySelector('.cards-scroll');
  const btnLeft = document.querySelector('.cards-nav--left');
  const btnRight = document.querySelector('.cards-nav--right');

  const scrollAmount = 750; // adjust if needed

  btnRight.addEventListener('click', () => {
    row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  btnLeft.addEventListener('click', () => {
    row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });


const icon = document.getElementById('icon-trigger');
const tray = document.getElementById('card-tray');

icon.addEventListener('click', () => {
  // Toggle the 'hidden' class
  tray.classList.toggle('hidden');
  
  // Optional: Smoothly scroll into view if it was hidden
  if (!tray.classList.contains('hidden')) {
    tray.scrollIntoView({ behavior: 'smooth' });
  }
});
