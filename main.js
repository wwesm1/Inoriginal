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

<<<<<<< HEAD
const scrollContainer = document.querySelector('.cards-scroll');
const btnLeft = document.querySelector('.cards-nav--left');
const btnRight = document.querySelector('.cards-nav--right');

const scrollAmount = 280; 

btnRight.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

btnLeft.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

function updateButtons() {
  btnLeft.disabled = scrollContainer.scrollLeft <= 0;

  btnRight.disabled =
    scrollContainer.scrollLeft + scrollContainer.clientWidth >=
    scrollContainer.scrollWidth - 5;
}

scrollContainer.addEventListener('scroll', updateButtons);
window.addEventListener('load', updateButtons);




<script>
  // Replace '.next' and '.prev' with the actual classes of your arrow buttons
  const slider = document.querySelector('.top-row');
  const nextBtn = document.querySelector('.next'); 
  const prevBtn = document.querySelector('.prev');

  if (nextBtn) {
    nextBtn.onclick = () => {
      slider.scrollBy({ left: 450, behavior: 'smooth' });
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {t
      slider.scrollBy({ left: -450, behavior: 'smooth' });
    };
  }
</script>
=======
icon.addEventListener('click', () => {
  // Toggle the 'hidden' class
  tray.classList.toggle('hidden');
  
  // Optional: Smoothly scroll into view if it was hidden
  if (!tray.classList.contains('hidden')) {
    tray.scrollIntoView({ behavior: 'smooth' });
  }
});
>>>>>>> ee70c08a0b1940cb5db7aa470b9eabe15a799433
