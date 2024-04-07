var cart = []; // Array para almacenar los productos en el carrito
    var total = 0; // Inicializar el total

    function addToCart(productName, price) {
        // Agregar el producto al carrito
        cart.push({name: productName, price: price});
        
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
        var cartList = document.getElementById('cart-items');
        cartList.innerHTML = ''; // Limpiar la lista antes de actualizar

        cart.forEach(function(item, index) {
            var listItem = document.createElement('li');
            listItem.textContent = item.name + ' - $' + item.price;
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
            removeButton.onclick = function() {
                removeFromCart(index);
            };

            // Crear un contenedor para el botón eliminar
            var buttonContainer = document.createElement('div');
            buttonContainer.classList.add('remove-button-container');
            buttonContainer.appendChild(removeButton);

            listItem.appendChild(buttonContainer);
            cartList.appendChild(listItem);
        });
    }

    function updateTotal() {
        document.getElementById('total').innerHTML = '<h3>Total: $' + total + '</h3>';
    }