var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}

//Product JS
var pslideIndex = 1;
pshowSlides(pslideIndex);

// Next/previous controls
function pplusSlides(n) {
  pshowSlides(pslideIndex += n);
}

// Thumbnail image controls
function pcurrentSlide(n) {
  pshowSlides(pslideIndex = n);
}

function pshowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("productSlides");
  var dots = document.getElementsByClassName("dotp");
  if (n > slides.length) {pslideIndex = 1}
  if (n < 1) {pslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" pactive", "");
  }
  slides[pslideIndex-1].style.display = "grid";
  dots[pslideIndex-1].className += " pactive";
}

//T-Shirt Product JS
var p2slideIndex = 1;
p2showSlides(p2slideIndex);

// Next/previous controls
function p2plusSlides(n) {
  p2showSlides(p2slideIndex += n);
}

// Thumbnail image controls
function p2currentSlide(n) {
  p2showSlides(p2slideIndex = n);
}

function p2showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("productSlides-tShirts");
  var dots = document.getElementsByClassName("dotp2");
  if (n > slides.length) {p2slideIndex = 1}
  if (n < 1) {p2slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" p2active", "");
  }
  slides[p2slideIndex-1].style.display = "grid";
  dots[p2slideIndex-1].className += " p2active";
}