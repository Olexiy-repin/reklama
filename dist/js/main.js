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

// modal
var modal = document.getElementById('myModal');

var btn = document.getElementsByClassName("myBtn");

var span = document.getElementsByClassName("close")[0];

for(var i=0; i<btn.length; i++) {
  btn[i].onclick = function() {
    document.body.style.overflow = "hidden";
    modal.style.display = "block";
  }
}

span.onclick = function() {
    document.body.style.overflow = "scroll";
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        document.body.style.overflow = "scroll";
        modal.style.display = "none";
    }
}
