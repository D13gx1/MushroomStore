document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var registrationResult = document.getElementById('registrationResult');
    var registrationSuccessCard = document.getElementById('registrationSuccessCard');

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    // Verificar que todos los campos estén completos
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Verificar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    // Ocultar el formulario y mostrar la tarjeta de éxito
    registrationResult.style.display = 'none';
    registrationSuccessCard.style.display = 'block';
});
