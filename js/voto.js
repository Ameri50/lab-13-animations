// JavaScript for Button Interaction
document.addEventListener("DOMContentLoaded", function() {
    const registerVoteButton = document.getElementById('btn-register-vote');
  
    // Example function to simulate vote registration logic
    const validateVoting = () => {
      // This would be your condition to enable/disable the button
      let isValidVote = false; // Update this based on actual validation logic
  
      if (isValidVote) {
        registerVoteButton.classList.remove('disabled');
        registerVoteButton.removeAttribute('disabled');
      } else {
        registerVoteButton.classList.add('disabled');
        registerVoteButton.setAttribute('disabled', 'true');
      }
    };
  
    // Trigger the validateVoting function whenever needed (e.g., after some input)
    // Example: validateVoting after user selects a product or option
    validateVoting();
  
    // Optional: Handle button click if it's enabled
    registerVoteButton.addEventListener('click', function(event) {
      if (!registerVoteButton.classList.contains('disabled')) {
        // Handle vote registration logic here
        alert("Voto registrado exitosamente!");
      }
    });
  });
  