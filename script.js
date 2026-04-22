function scrollCarousel(direction) {
  const container = document.getElementById('projectsList');
  // Pega a largura do primeiro card + o gap (2rem = 32px aproximadamente)
  const cardWidth = container.querySelector('.project-card').offsetWidth + 32;
  
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
function scrollTimeline(direction) {
  const container = document.getElementById('timelineList');
  // Pega a largura de um card + o gap de 2rem (32px)
  const cardWidth = container.querySelector('.card-timeline').offsetWidth + 32;
  
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}