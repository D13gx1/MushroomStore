$(document).ready(function(){
    $('#contactForm').submit(function(e){
        e.preventDefault(); // Evitar que el formulario se envíe
        var nombre = $('#nombre').val();
        var comentario = $('#comentario').val();
        if(nombre !== '' && comentario !== ''){
            alert('Mensaje enviado con éxito.');
            // Aquí puedes agregar código para enviar el formulario si es necesario
        } else {
            alert('Por favor completa todos los campos.');
        }
    });
});