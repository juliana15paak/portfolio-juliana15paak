function scrollCarousel(direction) {
  const container = document.getElementById('projectsList');
  // Pega a largura do primeiro card + o gap (2rem = 32px aproximadamente)
  const cardWidth = container.querySelector('.project-card').offsetWidth + 32;
  
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}