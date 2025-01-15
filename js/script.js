document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const voteButtons = document.querySelectorAll('.vote-button');
  
    voteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        product.classList.add('selected');
        setTimeout(() => product.classList.remove('selected'), 1000);
        alert('¡Gracias por tu voto!');
      });
    });
  
    products.forEach((product) => {
      product.addEventListener('mouseover', () => {
        product.style.opacity = '0.8';
      });
      product.addEventListener('mouseout', () => {
        product.style.opacity = '1';
      });
    });
  });
  