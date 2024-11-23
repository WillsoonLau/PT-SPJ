document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.home-banner-image');
    const dotsContainer = document.querySelector('.dots-container');
    const headerNavButtons = document.querySelectorAll('.nav-link');
    let slideInterval;

    // Smooth scrolling for navigation buttons
    headerNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.id.replace('navbutton-', '');
            console.log(`Scrolling to section: #${sectionId}`);
            const section = document.querySelector(`#${sectionId}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } 
            else {
                console.error(`Section with ID #${sectionId} not found.`);
            }
        });
    });
    

    // Create dots dynamically
    function createDots() {
        dotsContainer.innerHTML = "";
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.setAttribute('data-slide', index);
            dot.addEventListener('click', () => showSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    }

    // Show a specific slide
    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            dots[index].classList.remove('active');
        });
        slides[n].classList.add('active');
        dots[n].classList.add('active');
        slideIndex = n;
        resetSlideInterval();
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    document.querySelector(".prev-arrow")?.addEventListener("click", prevSlide);
    document.querySelector(".next-arrow")?.addEventListener("click", nextSlide);

    createDots();
    const dots = document.querySelectorAll('.dot');
    showSlide(slideIndex);

    // Swiper initialization
    if (document.querySelector('.card-wrapper')) {
        new Swiper('.card-wrapper', {
            loop: true,
            spaceBetween: 20,
            centeredSlides: true,
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        });
    }

    // Popup functionality
    function openPopup(imageSrc) {
        const popup = document.getElementById("imagePopup");
        const popupImage = document.getElementById("popupImage");
        if (popup && popupImage) {
            popupImage.src = imageSrc;
            popup.classList.add("active");
        }
    }

    function closePopup() {
        const popup = document.getElementById("imagePopup");
        if (popup) {
            popup.classList.remove("active");
        }
    }
});
