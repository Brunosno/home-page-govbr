const items = document.querySelectorAll('.navbar-content .nav-item');
items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

let currentIndex = 0;
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const cardsPerSlide = 4;

function showSlide(groupIndex) {
  currentIndex = groupIndex * cardsPerSlide;

  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i >= currentIndex && i < currentIndex + cardsPerSlide) {
      card.classList.add("active");
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === groupIndex);
  });
}

function currentDots(groupIndex){
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === groupIndex);
  });
}

function currentSlide(groupIndex) {
  showSlide(groupIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);

  const cards = document.querySelectorAll('.cards-container .card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
});

function mudarSlide(dot, index) {
  const card = dot.closest('.card-evento');
  const slides = card.querySelectorAll('.slide');
  const dots = card.querySelectorAll('.dot');

  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });

  dots.forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

function scrollStories(direction) {
  const container = document.getElementById('storiesContainer');
  const scrollAmount = 150;

  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
