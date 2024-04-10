$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        var nameInput = $('#name');
        var emailInput = $('#email');
        var passwordInput = $('#password');
        var registrationResult = $('#registrationResult');
        var registrationSuccessCard = $('#registrationSuccessCard');

        var name = nameInput.val();
        var email = emailInput.val();
        var password = passwordInput.val();

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
        registrationResult.css('display', 'none');
        registrationSuccessCard.css('display', 'block');
    });
});
