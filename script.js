// ============================================
// SPARKLES BACKGROUND EFFECT
// ============================================
function createSparkles() {
  const container = document.getElementById('sparkles');
  const count = 35;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = Math.random() * 100 + 'vh';
    s.style.animationDuration = (8 + Math.random() * 10) + 's';
    s.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(s);
  }
}
createSparkles();

// ============================================
// PHOTO GALLERY — AUTO FADE SLIDESHOW
// ============================================
const slides = document.querySelectorAll('.gallery-slide');
const dotsWrapper = document.getElementById('galleryDots');
let currentSlide = 0;
let galleryTimer;

// Build dots dynamically based on number of slides
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToSlide(i));
  dotsWrapper.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  resetGalleryTimer();
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

function resetGalleryTimer() {
  clearInterval(galleryTimer);
  galleryTimer = setInterval(nextSlide, 4500); // change image every 4.5s
}

if (slides.length > 0) {
  resetGalleryTimer();
}

// Allow swipe on mobile for gallery
let touchStartX = 0;
const galleryWrapper = document.getElementById('galleryWrapper');
galleryWrapper.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
galleryWrapper.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      goToSlide((currentSlide + 1) % slides.length);
    } else {
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  }
});

// ============================================
// GIFT CARDS — FLIP ON CLICK
// ============================================
document.querySelectorAll('.gift-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// ============================================
// CAKE CANDLE — BLOW OUT ON TAP / CLICK
// ============================================
const flame = document.getElementById('flame');
const cakeHint = document.getElementById('cakeHint');
let blownOut = false;

document.getElementById('cake').addEventListener('click', () => {
  blownOut = !blownOut;
  if (blownOut) {
    flame.classList.add('out');
    cakeHint.textContent = '🎉 Wish made! Happy Birthday, Maira!';
  } else {
    flame.classList.remove('out');
    cakeHint.textContent = 'Tap the candle to blow it out 🕯️';
  }
});
