// Basic JavaScript for interactivity

// Newsletter popup (simple example)
window.onload = function() {
    setTimeout(function() {
        if (!localStorage.getItem('newsletterShown')) {
            alert('Sign up for 10% off your first purchase!');
            localStorage.setItem('newsletterShown', 'true');
        }
    }, 3000);
};

// Add to cart simulation
document.querySelectorAll('.cta-button').forEach(button => {
    if (button.textContent === 'Add to Cart') {
        button.addEventListener('click', function() {
            alert('Added to cart!');
        });
    }
});