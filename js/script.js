document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("home-banner-image");
    var dotsContainer = document.querySelector('.dots-container');
    var slideInterval;

    // Create dots
    for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-slide', i);
        dot.addEventListener('click', function() {
            var dataIndex = parseInt(this.getAttribute('data-slide'));
            clearTimeout(slideInterval); // Clear the current timeout
            showSlide(dataIndex); // Show the clicked slide
        });
        dotsContainer.appendChild(dot);
    }

    var dots = document.getElementsByClassName('dot');

    // Show a specific slide
    function showSlide(n) {
        // Hide all slides
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove('active');
        }
        // Show the selected slide
        slides[n].style.display = "block";
        dots[n].classList.add('active');
        slideIndex = n;
        // Reset the timer
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000); // Auto slide every 4 seconds
    }

    // Show the next slide
    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    // Show the previous slide
    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    }

    // Event listeners for prev and next arrows
    document.querySelector(".prev-arrow").addEventListener("click", function() {
        prevSlide();
    });

    document.querySelector(".next-arrow").addEventListener("click", function() {
        nextSlide();
    });

    // Initialize the slideshow
    showSlide(slideIndex);
});
