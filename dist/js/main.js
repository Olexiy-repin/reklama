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
