// Add animations for cards on hover
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
