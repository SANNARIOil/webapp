document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create menu toggle button
        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        // Add toggle button to header
        header.querySelector('.container').appendChild(menuToggle);
        
        // Toggle menu on click
        menuToggle.addEventListener('click', function() {
            const navList = nav.querySelector('ul');
            navList.classList.toggle('active');
        });
    };

    // Only create mobile menu if screen width is below 768px
    if (window.innerWidth < 768) {
        createMobileMenu();
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (window.innerWidth < 768 && !menuToggle) {
            createMobileMenu();
        } else if (window.innerWidth >= 768 && menuToggle) {
            menuToggle.remove();
            document.querySelector('nav ul').classList.remove('active');
        }
    });

    // Read More button functionality
    const readMoreBtn = document.querySelector('.read-more');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            alert('More content about Sannari Groundnut Oil will be displayed here!');
        });
    }

    
});