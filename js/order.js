/**
 * Baked on 8th - Order Page Functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    
    // Set minimum date to today
    const pickupDateInput = document.getElementById('pickup-date');
    const today = new Date().toISOString().split('T')[0];
    pickupDateInput.setAttribute('min', today);

    // Phone number formatting
    const phoneInput = document.getElementById('contact-phone');
    phoneInput.addEventListener('input', function(e) {
        // Remove all non-digit characters
        let phoneNumber = e.target.value.replace(/\D/g, '');
        
        // Format the phone number
        if (phoneNumber.length > 0) {
            if (phoneNumber.length <= 3) {
                e.target.value = phoneNumber;
            } else if (phoneNumber.length <= 6) {
                e.target.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
            } else {
                e.target.value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
            }
        }
    });

    // Form Validation
    function validateForm() {
        let isValid = true;
        const formGroups = orderForm.querySelectorAll('.form-group');

        // Reset previous error states
        formGroups.forEach(group => group.classList.remove('error'));

        // Validate Cake Type
        const cakeType = document.getElementById('cake-type');
        if (cakeType.value === '') {
            markFieldAsError(cakeType, 'Please select a cake type');
            isValid = false;
        }

        // Validate Cake Size
        const cakeSize = document.getElementById('cake-size');
        if (cakeSize.value === '') {
            markFieldAsError(cakeSize, 'Please select a cake size');
            isValid = false;
        }

        // Validate Pickup Date
        if (pickupDateInput.value === '') {
            markFieldAsError(pickupDateInput, 'Please select a pickup date');
            isValid = false;
        }

        // Validate Name
        const contactName = document.getElementById('contact-name');
        if (contactName.value.trim() === '') {
            markFieldAsError(contactName, 'Please enter your name');
            isValid = false;
        }

        // Validate Phone
        const contactPhone = document.getElementById('contact-phone');
        const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
        if (!phoneRegex.test(contactPhone.value)) {
            markFieldAsError(contactPhone, 'Please enter a valid phone number');
            isValid = false;
        }

        // Validate Email
        const contactEmail = document.getElementById('contact-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contactEmail.value)) {
            markFieldAsError(contactEmail, 'Please enter a valid email address');
            isValid = false;
        }

        return isValid;
    }

    // Mark field as error
    function markFieldAsError(field, message) {
        const formGroup = field.closest('.form-group');
        formGroup.classList.add('error');
        
        // Remove existing error message if any
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Create and append error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        formGroup.appendChild(errorMessage);
    }

    // Form Submission
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate Form
        if (validateForm()) {
            // Simulate form submission (replace with actual submission logic)
            const formData = new FormData(orderForm);
            const orderDetails = Object.fromEntries(formData.entries());

            // Simple alert for now (replace with actual submission)
            alert('Order Submitted Successfully!\n\nWe will contact you to confirm your order.');
            
            // Optional: Reset form
            orderForm.reset();
        }
    });
});