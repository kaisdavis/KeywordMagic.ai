document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        const emailInput = form.querySelector('input[type="email"]');
        const submitButton = form.querySelector('button[type="submit"]');
        
        // Basic email validation
        if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            e.preventDefault();
            emailInput.focus();
            return;
        }

        // Add loading state
        form.classList.add('submitting');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
    });
}); 