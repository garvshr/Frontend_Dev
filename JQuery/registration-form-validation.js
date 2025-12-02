$(document).ready(function() {
    const registeredEmails = ['test@example.com', 'admin@example.com'];
    
    function validateName() {
        const name = $('#name').val().trim();
        const error = $('#name').next('.error');
        
        if (name === '') {
            $('#name').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Name is required');
            return false;
        } else if (name.length < 2) {
            $('#name').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Name must be at least 2 characters');
            return false;
        } else {
            $('#name').removeClass('invalid').addClass('valid').css('border-color', '#28a745');
            error.text('');
            return true;
        }
    }
    
    function validateEmail() {
        const email = $('#email').val().trim();
        const error = $('#email').next('.error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            $('#email').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Email is required');
            return false;
        } else if (!emailRegex.test(email)) {
            $('#email').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Invalid email format');
            return false;
        } else if (registeredEmails.includes(email)) {
            $('#email').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Email already registered');
            return false;
        } else {
            $('#email').removeClass('invalid').addClass('valid').css('border-color', '#28a745');
            error.text('');
            return true;
        }
    }
    
    function validatePassword() {
        const password = $('#password').val();
        const error = $('#password').next('.error');
        
        if (password === '') {
            $('#password').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Password is required');
            return false;
        } else if (password.length < 8) {
            $('#password').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Password must be at least 8 characters');
            return false;
        } else {
            $('#password').removeClass('invalid').addClass('valid').css('border-color', '#28a745');
            error.text('');
            return true;
        }
    }
    
    function validateConfirmPassword() {
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const error = $('#confirmPassword').next('.error');
        
        if (confirmPassword === '') {
            $('#confirmPassword').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Please confirm your password');
            return false;
        } else if (password !== confirmPassword) {
            $('#confirmPassword').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Passwords do not match');
            return false;
        } else {
            $('#confirmPassword').removeClass('invalid').addClass('valid').css('border-color', '#28a745');
            error.text('');
            return true;
        }
    }
    
    function validatePhone() {
        const phone = $('#phone').val().trim();
        const error = $('#phone').next('.error');
        const phoneRegex = /^\d{10}$/;
        
        if (phone === '') {
            $('#phone').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Phone number is required');
            return false;
        } else if (!phoneRegex.test(phone)) {
            $('#phone').removeClass('valid').addClass('invalid').css('border-color', '#dc3545');
            error.text('Phone must be exactly 10 digits');
            return false;
        } else {
            $('#phone').removeClass('invalid').addClass('valid').css('border-color', '#28a745');
            error.text('');
            return true;
        }
    }
    
    $('#name').blur(validateName);
    $('#email').blur(validateEmail);
    $('#password').blur(validatePassword);
    $('#confirmPassword').blur(validateConfirmPassword);
    $('#phone').blur(validatePhone);
    
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isPhoneValid = validatePhone();
        
        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid) {
            $('#successMessage').text('Registration Successful! Welcome aboard!').fadeIn();
            $('#registrationForm')[0].reset();
            $('input').removeClass('valid invalid').css('border-color', '#ddd');
        }
    });
});
