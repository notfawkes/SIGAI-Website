document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobileOverlayNav = document.querySelector('.mobile-overlay-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-overlay-nav a');

    if (hamburgerMenu && mobileOverlayNav) {
        hamburgerMenu.addEventListener('click', () => {
            mobileOverlayNav.classList.add('open');
        });
    }

    if (closeMenu && mobileOverlayNav) {
        closeMenu.addEventListener('click', () => {
            mobileOverlayNav.classList.remove('open');
        });
    }
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlayNav.classList.remove('open');
        });
    });

    // Google Sheet form submission functionality
    const form = document.querySelector('.footer-contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const scriptURL = 'https://script.google.com/macros/s/AKfycbzVSN0tmlyaR6s7EN0oagVrb5oiPSTU0zrUBcpkp1oexViWtAGVNGZ4waMRabNkp4k/exec'; 
            
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    alert('Thanks for your message! We will get back to you soon.');
                    form.reset(); 
                    submitButton.disabled = false;
                    submitButton.textContent = 'Submit';
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert('Oops! Something went wrong. Please try again.');
                    submitButton.disabled = false;
                    submitButton.textContent = 'Submit';
                });
        });
    }
});