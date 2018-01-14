const find = selector => document.querySelector(selector);
const findAll = selector => document.querySelectorAll(selector);

$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
});

// slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var sp = document.getElementById("cnt");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  sp.innerHTML=slideIndex;
}

// bottom slider
var counter = 1;
show(counter);

function plus(n) {
  show(counter += n);
}

function show(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var sp = document.getElementById("ct");

  if (n > x.length) {counter = 1}
  if (n < 1) {counter = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[counter-1].style.display = "block";
  sp.innerHTML=counter;
}

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
