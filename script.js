function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}