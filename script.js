var slideIndex = 1;
    
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
  var thumbnails = document.getElementsByClassName("gridimage");
  var captionText = document.getElementById("caption");
  var dots = document.getElementsByTagName("li");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    dots[i].innerHTML = "o";
  }
  slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].className += " active";
  captionText.innerHTML = thumbnails[slideIndex-1].alt;
  dots[slideIndex-1].innerHTML = "O";
}