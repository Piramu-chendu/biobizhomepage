// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 75, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill out all fields before submitting.');
    } else {
        alert('Thank you for contacting us!');
        form.reset(); // Clears the form fields
    }
});
