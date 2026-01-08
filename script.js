document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto play
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Dot click handlers
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            clearInterval(slideTimer); // Reset timer on manual interaction
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            currentSlide = slideIndex;
            showSlide(currentSlide);
            slideTimer = setInterval(nextSlide, slideInterval); // Restart timer
        });
    });

    // Mobile Menu
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            nav.classList.remove('active'); // Close mobile menu if open

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

