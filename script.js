document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Toggle contact form visibility
    const contactToggle = document.getElementById('contact-toggle');
    const contactForm = document.querySelector('.contact-form');
    if (contactToggle && contactForm) {
        contactToggle.addEventListener('click', () => {
            contactForm.classList.toggle('hidden');
        });
    }

    // Add shadow to navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.03)';
            navbar.style.backgroundColor = 'rgba(250, 249, 246, 0.8)';
        }
    });



    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                // Stop observing once revealed so it doesn't animate out and in repeatedly
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.section-header, .row > div, .d-flex > div, .hero-image');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-up');
        observer.observe(el);
    });
});
