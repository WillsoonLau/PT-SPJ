var slideIndex = 0;
var slides = document.getElementsByClassName("home-banner-image");
var slideInterval;

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    slideInterval = setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Function to show the next or previous slide and reset the timer
function plusSlides(n) {
    clearTimeout(slideInterval); // Clear the current timeout
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    slideInterval = setTimeout(showSlides, 4000); // Reset the timer
}

showSlides(); // Initialize the slideshow

// Event listeners for left and right arrows
document.querySelector(".prev-arrow").addEventListener("click", function() {
    plusSlides(-1);
});
document.querySelector(".next-arrow").addEventListener("click", function() {
    plusSlides(1);
});
