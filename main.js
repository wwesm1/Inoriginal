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


<script>
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
</script>



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