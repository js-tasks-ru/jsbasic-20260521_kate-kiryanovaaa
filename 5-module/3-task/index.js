function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let slides = carousel.querySelectorAll('.carousel__slide');
  let i = 0;
  let lastI = slides.length - 1;
  
  function updateArrows() {
    if (i === 0) {
      leftArrow.style.display = 'none';
    } else {
      leftArrow.style.display = '';
    }
    
    if (i === lastI) {
      rightArrow.style.display = 'none';
    } else {
      rightArrow.style.display = '';
    }
  }

  rightArrow.addEventListener('click', () => {
    if (i === lastI) return;
    i++;
    let count = i * carousel.offsetWidth;
    carousel.style.transform = `translateX(-${count}px)`;
    updateArrows();
  });
  
  leftArrow.addEventListener('click', () => {
    if (i === 0) return;
    i--;
    let caunt = i * carousel.offsetWidth;
    carousel.style.transform = `translateX(-${caunt}px)`;
    updateArrows();
  });

  updateArrows();
}
