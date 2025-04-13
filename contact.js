/**
 * SANNARI Website JavaScript
 * Provides interactive functionality for the SANNARI oil mill website
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initGoogleMaps();
    initContactInteractions();
    initResponsiveLayout();
    initAnimations();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    const navItems = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname;
    
    // Handle navigation item interactions
    navItems.forEach(item => {
        // Set active state for current page
        if (item.getAttribute('href') === currentPath || 
            (currentPath === '/' && item.getAttribute('href') === '#')) {
            item.classList.add('active');
        }
        
        // Add hover effects
        item.addEventListener('mouseenter', function() {
            this.style.color = '#ffffff';
            this.style.transition = 'color 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '#000000';
            }
            this.style.transition = 'color 0.3s ease';
        });
        
        // Add click handling for hash links
        item.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Mobile menu toggle (if we add a hamburger menu later)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = '☰';
    mobileMenuToggle.style.display = 'none'; // Hidden by default, shown in responsive mode
    
    document.querySelector('header').appendChild(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('show-mobile-menu');
    });
}

/**
 * Google Maps integration
 */
function initGoogleMaps() {
    const mapsLink = document.getElementById('maps-link');
    
    if (mapsLink) {
        mapsLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the shop address from the page
            const shopAddressElement = document.querySelector('.info-row:nth-child(3) p');
            
            if (shopAddressElement) {
                const shopAddress = shopAddressElement.textContent;
                // Create a Google Maps URL with the shop address
                const mapsUrl = `https://maps.app.goo.gl/HeE62J9R6NU6WHuC9`;
                
                // Open Google Maps in a new tab
                window.open(mapsUrl, '_blank');
            } else {
                // Fallback to a generic location if address not found
                window.open('https://maps.app.goo.gl/HeE62J9R6NU6WHuC9', '_blank');
            }
        });
        
        // Add hover effect for the maps button
        mapsLink.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#c1c1c1';
            this.style.transition = 'background-color 0.3s ease';
        });
        
        mapsLink.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#d3d2d2';
            this.style.transition = 'background-color 0.3s ease';
        });
    }
}

/**
 * Contact information interactions
 */
function initContactInteractions() {
    // Make phone number clickable for mobile devices
    const contactInfo = document.querySelector('.info-row:first-child p');
    
    if (contactInfo) {
        const phoneNumber = contactInfo.textContent.match(/\d+/)[0];
        
        if (phoneNumber) {
            // Create a wrapper that maintains the original text but makes the number clickable
            const originalText = contactInfo.textContent;
            const phoneLink = document.createElement('a');
            phoneLink.href = `tel:${phoneNumber}`;
            phoneLink.style.color = 'inherit';
            phoneLink.style.textDecoration = 'none';
            
            // Replace the phone number in the text with a clickable link
            contactInfo.innerHTML = originalText.replace(
                phoneNumber, 
                `<a href="tel:${phoneNumber}" style="color: inherit;">${phoneNumber}</a>`
            );
        }
    }
}
    
 