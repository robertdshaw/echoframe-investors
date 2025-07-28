document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    let currentSlideIndex = 0;

    // Initially hide all slides except the first one
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = '1';
                slide.style.zIndex = '1';
                slide.style.pointerEvents = 'auto'; // Make current slide interactive
            } else {
                slide.style.opacity = '0';
                slide.style.zIndex = '0'; // Put hidden slides behind
                slide.style.pointerEvents = 'none'; // Make hidden slides unclickable
            }
        });
    }

    // Function to show the next slide
    function showNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Function to show the previous slide
    function showPrevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    // Event listeners for buttons
    if (prevButton) {
        prevButton.addEventListener('click', showPrevSlide);
    }
    if (nextButton) {
        nextButton.addEventListener('click', showNextSlide);
    }

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            showNextSlide();
        } else if (event.key === 'ArrowLeft') {
            showPrevSlide();
        }
    });

    // Display the initial slide
    showSlide(currentSlideIndex);
});
