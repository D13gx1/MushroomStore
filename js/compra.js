$(document).ready(function() {
    var cart = []; // Array para almacenar los productos en el carrito
    var total = 0; // Inicializar el total

    function addToCart(productName, price) {
        // Agregar el producto al carrito
        cart.push({ name: productName, price: price });

        // Actualizar la lista del carrito
        updateCart();

        // Actualizar el total
        total += price;
        updateTotal();
    }

    function removeFromCart(index) {
        // Remover el producto del carrito
        total -= cart[index].price;
        cart.splice(index, 1);

        // Actualizar la lista del carrito
        updateCart();

        // Actualizar el total
        updateTotal();
    }

    function updateCart() {
        var cartList = $('#cart-items');
        cartList.empty(); // Limpiar la lista antes de actualizar

        $.each(cart, function(index, item) {
            var listItem = $('<li>').text(item.name + ' - $' + item.price);
            var removeButton = $('<button>').text('Eliminar').addClass('btn btn-danger btn-sm ml-2').click(function() {
                removeFromCart(index);
            });

            // Crear un contenedor para el botón eliminar
            var buttonContainer = $('<div>').addClass('remove-button-container').append(removeButton);

            listItem.append(buttonContainer);
            cartList.append(listItem);
        });
    }

    function updateTotal() {
        $('#total').html('<h3>Total: $' + total + '</h3>');
    }

    // Mostrar la tarjeta modal de compra al hacer clic en el botón "Comprar"
    $('#comprar-btn').click(function() {
        $('#purchase-total').text('$' + total); // Actualizar el total en la tarjeta modal
        $('#purchase-modal').modal('show'); // Mostrar la tarjeta modal
    });

    // Confirmar la compra
    $('#confirm-purchase-btn').click(function() {
        // Aquí puedes realizar acciones adicionales al confirmar la compra, como enviar la información del carrito al servidor, etc.
        // Por ahora, simplemente restablecemos el carrito y el total.
        cart = [];
        total = 0;
        updateCart();
        updateTotal();
        $('#purchase-modal').modal('hide'); // Ocultar la tarjeta modal después de confirmar la compra
    });

    // Vincular los botones "Comprar" con la función addToCart
    $('#comprar1').click(function() {
        addToCart('Hongos Portobello', 10);
    });

    $('#comprar2').click(function() {
        addToCart('Setas Shiitake', 12);
    });

    $('#comprar3').click(function() {
        addToCart('Champiñones Blancos', 8);
    });

    $('#comprar4').click(function() {
        addToCart('Hongos Morchella', 11);
    });

    $('#comprar5').click(function() {
        addToCart('Hongos Chanterelle', 10);
    });

    $('#comprar6').click(function() {
        addToCart('Trufas', 15);
    });

    // Ejemplo de uso inicial del carrito
    // addToCart('Producto 1', 10);
    // addToCart('Producto 2', 20);
    // addToCart('Producto 3', 30);
});
