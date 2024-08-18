// script.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    // Add loading state to button
    function setButtonLoading(isLoading) {
        submitButton.disabled = isLoading;
        submitButton.innerHTML = isLoading ? 'Sending...' : 'Send Message';
    }

    // Show notification
    function showNotification(message, isSuccess = true) {
        const notification = document.createElement('div');
        notification.className = `notification ${isSuccess ? 'success' : 'error'}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        setButtonLoading(true);

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setButtonLoading(false);
            showNotification('Message sent successfully!');
            contactForm.reset();
        }, 2000);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});