const productos = document.querySelectorAll('.producto');
let productoSeleccionado = null;
const btnConfirmar = document.querySelector('#btnConfirmar');
const feedback = document.querySelector('#feedback');
const tooltip = document.querySelector('#tooltip');

// Función para manejar la selección de productos
productos.forEach(producto => {
    producto.addEventListener('click', (event) => {
        // Remover selección previa
        if (productoSeleccionado) {
            productoSeleccionado.classList.remove('seleccionado');
        }
        // Asignar el producto seleccionado
        productoSeleccionado = event.currentTarget;
        productoSeleccionado.classList.add('seleccionado');
        
        // Mostrar el botón de confirmar
        btnConfirmar.style.display = 'block';
        feedback.textContent = '';
    });

    // Mostrar tooltip al hacer hover
    producto.addEventListener('mouseenter', () => {
        const descripcion = producto.dataset.descripcion;
        tooltip.textContent = descripcion;
        const rect = producto.getBoundingClientRect();
        tooltip.style.top = `${rect.top - 30}px`;
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.display = 'block';
    });

    // Ocultar tooltip al salir del hover
    producto.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});

// Función para confirmar el voto
btnConfirmar.addEventListener('click', () => {
    if (productoSeleccionado) {
        feedback.textContent = `Voto registrado para: ${productoSeleccionado.dataset.nombre}`;
        btnConfirmar.style.display = 'none';
        productoSeleccionado.classList.remove('seleccionado');
        productoSeleccionado = null;
    } else {
        feedback.textContent = 'No has seleccionado ningún producto.';
    }
});

// Manejo de clic en un área vacía
document.querySelector('#productosContainer').addEventListener('click', (event) => {
    if (!event.target.closest('.producto')) {
        alert('Por favor, selecciona un producto antes de continuar.');
    }
});

// Navegación con el teclado
document.addEventListener('keydown', (event) => {
    const productosArray = Array.from(productos);
    let currentIndex = productosArray.indexOf(productoSeleccionado);

    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % productosArray.length;
        seleccionarProducto(productosArray[currentIndex]);
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + productosArray.length) % productosArray.length;
        seleccionarProducto(productosArray[currentIndex]);
    } else if (event.key === ' ') {
        event.preventDefault();  // Evitar que la página se desplace
        seleccionarProducto(productosArray[currentIndex]);
    } else if (event.key === 'Enter' && productoSeleccionado) {
        btnConfirmar.click();
    }
});

// Función para seleccionar producto con teclado
function seleccionarProducto(producto) {
    if (productoSeleccionado) {
        productoSeleccionado.classList.remove('seleccionado');
    }
    productoSeleccionado = producto;
    productoSeleccionado.classList.add('seleccionado');
    btnConfirmar.style.display = 'block';
}
