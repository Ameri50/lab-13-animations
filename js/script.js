document.addEventListener("DOMContentLoaded", () => {
    // Inicializar variables
    let carritoCount = 0;

    // Obtener elementos del carrito
    const carritoContenedor = document.getElementById("numeroCarrito");
    const buyAllButton = document.getElementById("buyAllButton");

    // Función para actualizar los votos y el carrito
    function updateVotesAndCart(productId, action) {
        const product = document.getElementById(productId);
        const countUp = product.querySelector(".countUp");
        const countDown = product.querySelector(".countDown");
        const addToCartButton = product.querySelector(".addToCart");

        // Actualizar votos
        if (action === "up") {
            countUp.textContent = parseInt(countUp.textContent) + 1;
        } else if (action === "down") {
            countDown.textContent = parseInt(countDown.textContent) + 1;
        }

        // Si el producto no está en el carrito, agregarlo
        if (!addToCartButton.classList.contains("added")) {
            addToCartButton.classList.add("added");
            carritoCount++;
            carritoContenedor.textContent = carritoCount;
        }
    }

    // Función para manejar el botón "Comprar Todo"
    buyAllButton.addEventListener("click", () => {
        alert("¡Gracias por comprar todos los productos!");
        carritoCount = 0; // Reiniciar el carrito
        carritoContenedor.textContent = carritoCount;
    });

    // Asignar eventos a los botones de votar y agregar al carrito
    const voteUpButtons = document.querySelectorAll(".voteUp");
    const voteDownButtons = document.querySelectorAll(".voteDown");
    const addToCartButtons = document.querySelectorAll(".addToCart");

    voteUpButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            updateVotesAndCart(`product${index + 1}`, "up");
        });
    });

    voteDownButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            updateVotesAndCart(`product${index + 1}`, "down");
        });
    });

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            updateVotesAndCart(`product${index + 1}`, "add");
        });
    });
});
