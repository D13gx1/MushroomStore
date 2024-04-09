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

            $.each(cart, function (index, item) {
                var listItem = $('<li>').text(item.name + ' - $' + item.price);
                var removeButton = $('<button>').text('Eliminar').addClass('btn btn-danger btn-sm ml-2').click(function () {
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
    
        // Ejemplo de uso:
        $(document).ready(function () {
            addToCart('Producto 1', 10);
            addToCart('Producto 2', 20);
            addToCart('Producto 3', 30);
        });