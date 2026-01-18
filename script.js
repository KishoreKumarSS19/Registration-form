var form = document.getElementById('regForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var submitBtn = document.getElementById('submitBtn');

var errors = {
    name: document.getElementById('nameError'),
    email: document.getElementById('emailError'),
    password: document.getElementById('passwordError')
};

function validateName() {
    var value = nameInput.value.trim();
    errors.name.textContent = value ? '' : 'Name is required';
    return value.length > 0;
}

function validateEmail() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = emailRegex.test(emailInput.value);
    errors.email.textContent = isValid ? '' : 'Enter valid email';
    return isValid;
}

function validatePassword() {
    var value = passwordInput.value;
    var passwordRegex =
        /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
    var isValid = passwordRegex.test(value);
    errors.password.textContent = isValid
        ? ''
        : 'Min 6 chars, 1 number & 1 special char';
    return isValid;
}

function validateForm() {
    var isValid = validateName() && validateEmail() && validatePassword();
    submitBtn.disabled = !isValid;
}

[nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!submitBtn.disabled) {
        alert('Registration successful!');
        form.reset();
        validateForm();
    }
});

// initial state
validateForm();
