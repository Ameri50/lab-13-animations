// Cart and Voting functionality
let cart = []; // Stores the cart items
let products = [
    {id: 'product1', name: 'Producto 1', price: 10},
    {id: 'product2', name: 'Producto 2', price: 15},
    {id: 'product3', name: 'Producto 3', price: 20},
    {id: 'product4', name: 'Producto 4', price: 25},
    {id: 'product5', name: 'Producto 5', price: 30},
    // Add all products similarly...
];

function updateCart() {
    const cartItemsContainer = document.getElementById('carritoItems');
    const totalPrice = document.getElementById('totalPrice');
    
    // Clear current items
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('carrito-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image" width="50" height="50">
            <p>${item.name} - $${item.price}</p>
        `;
        cartItemsContainer.appendChild(div);
        total += item.price;
    });

    // Update total price
    totalPrice.textContent = total.toFixed(2);  // Show total with currency format
}

// Add product to cart
document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productDiv = event.target.closest('.product');
        const productId = productDiv.id;
        const productName = productDiv.querySelector('p').textContent;
        const productPrice = products.find(p => p.id === productId).price;
        const productImage = productDiv.querySelector('img').src;
        
        // Add the product to the cart
        cart.push({name: productName, price: productPrice, image: productImage});
        
        // Update the cart UI
        updateCart();
    });
});

// Finalizar Compra (Complete Purchase) functionality
document.getElementById('finalizarCompraButton').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('El carrito está vacío. No se puede finalizar la compra.');
    } else {
        // Calculate total
        let total = 0;
        cart.forEach(item => total += item.price);
        
        // Show the confirmation message
        alert(`Compra realizada con éxito!\nTotal: $${total.toFixed(2)}`);
        
        // Clear the cart
        cart = [];
        
        // Update the cart UI
        updateCart();
    }
});
