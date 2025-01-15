// Obtener los elementos del DOM
const showCartButton = document.getElementById("showCartButton");
const cartModal = document.getElementById("cartModal");
const closeModal = document.querySelector(".close");
const cartItemsContainer = document.getElementById("cartItems");
const totalPriceContainer = document.getElementById("totalPrice");
const buyAllButton = document.getElementById("buyAllButton");

// Array de productos en el carrito (puedes remplazarlo con datos reales)
const cartItems = [
    { name: "Producto 1", price: 15 },
    { name: "Producto 2", price: 25 },
    { name: "Producto 3", price: 10 },
];

// Función para mostrar el carrito en el modal
function showCart() {
    cartItemsContainer.innerHTML = ""; // Limpiar el contenido anterior

    let totalPrice = 0;

    // Mostrar cada producto en el carrito
    cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price;
    });

    // Mostrar el precio total
    totalPriceContainer.textContent = `Total: $${totalPrice}`;
    
    // Mostrar el modal
    cartModal.style.display = "block";
}

// Función para cerrar el modal
function closeCart() {
    cartModal.style.display = "none";
}

// Función para realizar la compra de todo
function buyAll() {
    // Aquí puedes simular el proceso de compra (por ejemplo, redirigir a una página de pago o mostrar un mensaje)
    alert("Gracias por tu compra. El total ha sido cargado.");
    
    // Limpiar el carrito después de la compra
    cartItems.length = 0; // Vaciar el carrito
    showCart(); // Actualizar el modal para reflejar el carrito vacío
}

// Añadir eventos
showCartButton.addEventListener("click", showCart); // Mostrar el carrito
closeModal.addEventListener("click", closeCart); // Cerrar el modal cuando se hace clic en la "X"
window.addEventListener("click", function(event) {
    if (event.target === cartModal) {
        closeCart(); // Cerrar el modal si se hace clic fuera de él
    }
});

// Evento para el botón de "Comprar Todo"
buyAllButton.addEventListener("click", buyAll); // Ejecutar la compra
