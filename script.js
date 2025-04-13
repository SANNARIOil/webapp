// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to the main heading
    const heading = document.querySelector('h1');
    if (heading) {
        heading.classList.add('animated');
        
        // Simple animation for the heading
        setTimeout(() => {
            heading.style.opacity = '1';
            heading.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Add hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // You could add more interactive features here as needed
    // For example: image gallery, product details toggle, etc.
    
    console.log('SANNARI website loaded successfully!');
});