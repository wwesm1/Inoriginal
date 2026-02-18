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


// Wrap everything in a listener to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. The Slider (Drag to scroll)
    const slider = document.querySelector('.top-row');

    if (slider) { // This "if" prevents the error if the element is missing
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => isDown = false);
        slider.addEventListener('mouseup', () => isDown = false);

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // 2. The Buttons (Studio scroll)
    // We attach the function to the window so the HTML can "see" it
    window.scrollCollections = function(amount) {
        const row = document.getElementById("collectionsRow");
        if (row) {
            row.scrollBy({ left: amount, behavior: "smooth" });
        } else {
            console.error("Error: Could not find element with ID 'collectionsRow'");
        }
    };
});

document.addEventListener('DOMContentLoaded', () => {
  const studioRow = document.querySelector('.studio-row');
  const leftBtn = document.querySelector('.studio-nav.left');
  const rightBtn = document.querySelector('.studio-nav.right');

  if (studioRow && leftBtn && rightBtn) {
    rightBtn.onclick = () => studioRow.scrollBy({ left: 220, behavior: 'smooth' });
    leftBtn.onclick = () => studioRow.scrollBy({ left: -220, behavior: 'smooth' });
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // Select the scroll container
    const scrollContainer = document.querySelector('.cards-scroll');
    const leftBtn = document.querySelector('.cards-nav--left');
    const rightBtn = document.querySelector('.cards-nav--right');

    if (scrollContainer && leftBtn && rightBtn) {
        const scrollAmount = 300; // How far to scroll on each click

        rightBtn.onclick = () => {
            scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        };

        leftBtn.onclick = () => {
            scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        };
    }
});


// This handles ALL scroll rows on your page automatically
document.querySelectorAll('.studio-section, .cards-slider').forEach(slider => {
  const row = slider.querySelector('.studio-row, .cards-scroll');
  const leftBtn = slider.querySelector('.left, .cards-nav--left');
  const rightBtn = slider.querySelector('.right, .cards-nav--right');

  if (row && leftBtn && rightBtn) {
    rightBtn.onclick = () => row.scrollBy({ left: 400, behavior: 'smooth' });
    leftBtn.onclick = () => row.scrollBy({ left: -400, behavior: 'smooth' });
  }
});