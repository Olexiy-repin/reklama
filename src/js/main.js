const find = selector => document.querySelector(selector);
const findAll = selector => document.querySelectorAll(selector);

/* hamburger */
$('.cross').hide();
$('.menu').hide();
$('.hamburger').click(() => {
  $('.menu').slideToggle('slow', () => {
    $('.hamburger').hide();
    $('.cross').show();
  });
});

$('.cross').click(() => {
  $('.menu').slideToggle('slow', () => {
    $('.cross').hide();
    $('.hamburger').show();
  });
});

/* slider */
function Slider(args) {
  let slideIndex = 1;
  const { slidesSelector, counterSelector } = args;

  this.render = () => {
    const slides = findAll(slidesSelector);
    const counter = find(counterSelector);

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
  slidesSelector: '.mySlides',
  counterSelector: '#mySlides-counter',
});
topSlider.render();

const bottomSlider = new Slider({
  slidesSelector: '.slides',
  counterSelector: '#slides-counter',
});
bottomSlider.render();


/* modal windows */
const Modal = (root) => {
  const show = () => {
    root.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  const hide = () => {
    root.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  const init = () => {
    show(root);

    root.querySelector('.bottom-close')
      .onclick = () => hide(root);

    window.onclick = ({ target }) => {
      if (target === root) {
        hide(root);
      }
    };
  };

  return { show, hide, init };
};

const modalTriggers = findAll('.modal-trigger');
Array.from(modalTriggers).forEach((trigger) => {
  trigger.addEventListener('click', ({ target }) => {
    const element = find(target.dataset.modal);

    Modal(element).init();
  });
});
