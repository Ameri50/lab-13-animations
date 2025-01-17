document.addEventListener("DOMContentLoaded", () => {
    const voteForm = document.getElementById("vote-form");
    const totalVotesElement = document.getElementById("total-votes");
  
    // Función para actualizar el total de votos
    const updateTotalVotes = () => {
      const products = document.querySelectorAll(".product");
      let totalVotes = 0;
      products.forEach((product) => {
        const votes = parseInt(product.getAttribute("data-votes"), 10);
        totalVotes += votes;
      });
      totalVotesElement.textContent = totalVotes;
    };
  
    // Evento cuando se registra un voto
    voteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const selectedProduct = document.querySelector(".product.selected");
      if (selectedProduct) {
        let votes = parseInt(selectedProduct.getAttribute("data-votes"), 10);
        votes += 1;
        selectedProduct.setAttribute("data-votes", votes);
        selectedProduct.querySelector(".vote-count").textContent = `Votos: ${votes}`;
        
        // Actualizar el total de votos
        updateTotalVotes();
      }
    });
  
    // Actualización inicial del total de votos
    updateTotalVotes();
  });
  