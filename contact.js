// Contact Form Handling
const contactForm = document.getElementById('contactForm');

// Form validation and submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const carInterest = document.getElementById('carInterest').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    if (!validateForm(name, email, phone)) {
        return;
    }

    // In a real application, this would send data to a server
    // For now, we'll just show a success message
    showSuccessMessage();
    contactForm.reset();
});

// Form validation
function validateForm(name, email, phone) {
    let isValid = true;

    // Name validation
    if (name.length < 2) {
        showError('name', 'Please enter a valid name');
        isValid = false;
    } else {
        removeError('name');
    }

    // Email validation
    if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    } else {
        removeError('email');
    }

    // Phone validation
    if (!isValidPhone(phone)) {
        showError('phone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    } else {
        removeError('phone');
    }

    return isValid;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation helper
function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

// Show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.parentElement.querySelector('.error-message') || document.createElement('div');
    
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff0000';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;

    if (!field.parentElement.querySelector('.error-message')) {
        field.parentElement.appendChild(errorDiv);
    }

    field.style.borderColor = '#ff0000';
}

// Remove error message
function removeError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.parentElement.querySelector('.error-message');
    
    if (errorDiv) {
        errorDiv.remove();
    }

    field.style.borderColor = '#ddd';
}

// Show success message
function showSuccessMessage() {
    // Create success message element if it doesn't exist
    let successMessage = document.querySelector('.success-message');
    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        contactForm.parentElement.insertBefore(successMessage, contactForm);
    }

    // Show and style the message
    successMessage.style.display = 'block';
    successMessage.textContent = 'Thank you! We\'ll contact you soon.';

    // Hide the message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});