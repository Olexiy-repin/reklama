(() => {
  function Slider(args) {
    let slideIndex = 1;
    const { rootSelector, slidesSelector, counterSelector } = args;
    const root = document.querySelector(rootSelector);

    this.init = () => {
      root.querySelector('.slider-prev').onclick = () => this.switch(-1);
      root.querySelector('.slider-next').onclick = () => this.switch(1);

      this.render();
    };

    this.render = () => {
      const slides = root.querySelectorAll(slidesSelector);
      const counter = root.querySelector(counterSelector);

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      if (slideIndex < 1) {
        slideIndex = slides.length;
      }

      Array.from(slides).forEach((slide) => {
        slide.style.display = 'none';
      });

      slides[slideIndex - 1].style.display = 'block';

      if (counter) {
        counter.innerHTML = slideIndex;
      }
    };

    this.switch = (offset) => {
      this.render(slideIndex += offset);
    };
  };

  const topSlider = new Slider({
    rootSelector: '.sec-04__mobile-slider',
    slidesSelector: '.mySlides',
    counterSelector: '#mySlides-counter',
  });
  topSlider.init();

  const bottomSlider = new Slider({
    rootSelector: '.sec-10__slider',
    slidesSelector: '.slides',
    counterSelector: '#slides-counter',
  });
  bottomSlider.init();
})();
