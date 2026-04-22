//=========================== CARROSSEL PROJETOS ==========================
function scrollCarousel(direction) {
  const container = document.getElementById('projectsList');
  // Pega a largura do primeiro card + o gap (2rem = 32px aproximadamente)
  const cardWidth = container.querySelector('.project-card').offsetWidth + 32;
  
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
//=========================== CARROSSEL TIMELINE ==========================
function scrollTimeline(direction) {
  const container = document.getElementById('timelineList');
  // Pega a largura de um card + o gap de 2rem (32px)
  const cardWidth = container.querySelector('.card-timeline').offsetWidth + 32;
  
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
//=========================== CARROSSEL DE MINI FOTOS ==========================
let currentIdx = 0;

function moveMini(direction, trackId) {
  const track = document.getElementById(trackId);
  const container = track.parentElement;
  const images = track.querySelectorAll('img');
  const dots = container.querySelectorAll('.dot');
  
  let index = parseInt(track.dataset.index || 0);
  
  index += direction;

  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;

  track.style.transform = `translateX(-${index * 400}px)`;
  track.dataset.index = index;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}