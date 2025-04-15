document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'active' from all cards
            cards.forEach(c => c.classList.remove('active'));

            // Add 'active' to clicked card
            card.classList.add('active');
        });
    });
});

