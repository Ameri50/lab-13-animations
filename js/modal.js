// Modal functionality for the cart
const modal = document.getElementById('modalCarrito');
const closeModal = document.querySelector('.close');

// Open the modal when clicking on the cart container
document.getElementById('carritoContenedor').addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when clicking on the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
