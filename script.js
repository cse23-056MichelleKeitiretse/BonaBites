// Update form validation in script.js
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('[type="email"]');
        const name = this.querySelector('[type="text"]');
        
        // Remove existing error messages
        this.querySelectorAll('.error-message').forEach(el => el.remove());

        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            return;
        }

        if (name.value.trim().length < 2) {
            showError(name, 'Name must be at least 2 characters');
            return;
        }

        this.submit();
    });
});

function showError(input, message) {
    const errorElement = document.createElement('small');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.textContent = message;
    input.parentNode.appendChild(errorElement);
    
    setTimeout(() => errorElement.remove(), 3000);
}

function validateEmail(email) {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
