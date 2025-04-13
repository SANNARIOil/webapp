document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all Buy Now buttons
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Get the product details from the parent card
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h2').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Show confirmation message
            alert(`You are about to purchase ${productName} for ${productPrice}. Proceeding to checkout...`);
            
            // In a real application, this would redirect to a checkout page
            // window.location.href = 'checkout.html';
        });
    });
    
    // Add hover effect for product cards
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});