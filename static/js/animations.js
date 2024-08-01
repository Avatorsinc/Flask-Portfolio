// static/js/animations.js

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate, .animate-skill');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    elements.forEach(element => {
        element.classList.add('scroll');
        observer.observe(element);
    });

    // Initial animation for elements in view on page load
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('show');
        }
    });
});
