document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Remove 'active' and hide all details
        cards.forEach(c => {
          c.classList.remove('active');
          const details = c.querySelector('.details');
          if (details) {
            details.style.display = 'none';
          }
        });
  
        // Activate clicked card
        card.classList.add('active');
  
        // Show its details
        const activeDetails = card.querySelector('.details');
        if (activeDetails) {
          activeDetails.style.display = 'block';
        }
      });
    });
  
    // Optional: hide all details on load
    cards.forEach(card => {
      const details = card.querySelector('.details');
      if (details) {
        details.style.display = 'none';
      }
    });
  });
  