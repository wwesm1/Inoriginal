// ================= HERO SLIDER =================
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');

let current = 0;

function goToSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  if (slides[index] && dots[index]) {
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
  }
}

// Auto slide
if (slides.length > 0) {
  setInterval(() => {
    current = (current + 1) % slides.length;
    goToSlide(current);
  }, 4000);
}


// ================= CARD SCROLLER =================
const scrollContainer = document.querySelector('.cards-scroll');
const btnLeft = document.querySelector('.cards-nav--left');
const btnRight = document.querySelector('.cards-nav--right');

const scrollAmount = 280;

if (scrollContainer && btnLeft && btnRight) {

  btnRight.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  btnLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  function updateButtons() {
    btnLeft.disabled = scrollContainer.scrollLeft <= 0;

    btnRight.disabled =
      scrollContainer.scrollLeft + scrollContainer.clientWidth >=
      scrollContainer.scrollWidth - 5;
  }

  scrollContainer.addEventListener('scroll', updateButtons);
  window.addEventListener('load', updateButtons);
}


const slider = document.querySelector('.top-row');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (slider && nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 450, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -450, behavior: 'smooth' });
  });
}


// ================= ICON TRAY TOGGLE =================
const icon = document.getElementById('icon-trigger');
const tray = document.getElementById('card-tray');

if (icon && tray) {
  icon.addEventListener('click', () => {
    tray.classList.toggle('hidden');

    if (!tray.classList.contains('hidden')) {
      tray.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {

  const row = document.querySelector('.studio-row');
  const left = document.querySelector('.studio-nav.left');
  const right = document.querySelector('.studio-nav.right');

  const scrollAmount = 260;

  if (row && left && right) {
    right.addEventListener('click', () => {
      row.scrollBy({ left: scrollAmount, behavior:'smooth' });
    });

    left.addEventListener('click', () => {
      row.scrollBy({ left: -scrollAmount, behavior:'smooth' });
    });
  }

});




<script>
  function scrollTopRow(amount) {
    document.getElementById("topRow")
      .scrollBy({ left: amount, behavior: "smooth" });
  }
</script>
