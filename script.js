// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // You can add form validation here if needed

    alert('Thank you for your message! I will get back to you soon.');

    // Optionally, clear the form
    this.reset();
});
