const products = document.querySelectorAll(".product");
const btnRegisterVote = document.querySelector("#btn-register-vote");
const voteForm = document.getElementById("vote-form");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

let selectedItem = null;

function addTooltipToDiv(product) {
  const description = product.dataset.description;
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = description;

  product.appendChild(tooltip);
}

for (let product of products) {
  // Ensure initial vote count is set to 0
  if (!product.dataset.votes) {
    product.dataset.votes = 0;
  }

  addTooltipToDiv(product);

  product.addEventListener("click", function () {
    // Remove the "selected" class from all products
    for (let item of products) {
      item.classList.remove("selected");
    }

    // Add the "selected" class to the clicked product
    product.classList.add("selected");

    selectedItem = product.dataset.item;
    btnRegisterVote.classList.remove("disabled");
    btnRegisterVote.disabled = false;
  });
}

function getCurrentSelectedProduct() {
  for (let product of products) {
    if (product.classList.contains("selected")) {
      return product;
    }
  }
  return null;
}

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function createContentModal(product) {
  // Clear the modal content to prevent duplicates
  modal.innerHTML = "";
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalImg = document.createElement("img");
  modalImg.src = product.image;

  const title = document.createElement("h2");
  title.textContent = product.title;

  const description = document.createElement("p");
  description.textContent = product.description;

  const voteQty = document.createElement("p");
  voteQty.textContent = `Cantidad de votos: ${product.votes}`;

  const btnClose = document.createElement("button");
  btnClose.textContent = "Cerrar";

  btnClose.addEventListener("click", closeModal);

  modalContent.appendChild(modalImg);
  modalContent.appendChild(title);
  modalContent.appendChild(description);
  modalContent.appendChild(voteQty);
  modalContent.appendChild(btnClose);

  modal.appendChild(modalContent);
}

// Handle the vote form submission
voteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const currentSelectedProduct = getCurrentSelectedProduct();

  if (!currentSelectedProduct) {
    alert("Por favor, selecciona un producto antes de votar.");
    return;
  }

  // Update the vote count for the selected product
  const productVotes = parseInt(currentSelectedProduct.dataset.votes) + 1;
  currentSelectedProduct.dataset.votes = productVotes;

  // Update the vote count in the product UI
  const voteCountElement = currentSelectedProduct.querySelector(".vote-count");
  voteCountElement.textContent = `Votos: ${productVotes}`;

  // Mark the product as voted (disable further voting)
  currentSelectedProduct.classList.add("voted");

  // Open modal to show the updated vote count
  openModal();
  createContentModal({
    image: currentSelectedProduct.querySelector("img").src,
    title: currentSelectedProduct.dataset.title,
    description: currentSelectedProduct.dataset.description,
    votes: productVotes,
  });

  // Disable the "Register Vote" button after voting
  btnRegisterVote.disabled = true;
});

// Close the modal when clicking on the overlay
overlay.addEventListener("click", closeModal);
