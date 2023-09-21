let navbar=document.querySelector(".navbar")
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cartItems.classList.remove('active')
}
let searchForm=document.querySelector(".search-form")
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItems.classList.remove('active')
}

let cartItems=document.querySelector(".cart-items-container")
document.querySelector('#cart-btn').onclick=()=>{
    cartItems.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}
window.onscroll=()=>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    cartItems.classList.remove('active')

}

var slideIndex = 0;
function showSlides() {
   var i;
   var slides = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img");
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var slideIndex2 = 1;
showSlides2(slideIndex2);


// Thumbnail image controls
function currentSlide(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-offer")[0].getElementsByTagName("img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}
showSlides();
showSlides2();



