/* ==========================================================================
   VANILLA JS - Photos Page Slide-In Animation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Select all photos
    const photos = document.querySelectorAll('.photo-item');
    
    // Add staggered sliding animation to each photo
    photos.forEach((photo, index) => {
        // Base delay plus a staggered amount based on index
        const randomDelay = Math.floor(Math.random() * 100);
        const steppedDelay = Math.min(index * 35, 400); 
        const totalDelay = randomDelay + steppedDelay;
        
        // Pass the delay into CSS via variable
        photo.style.setProperty('--slide-delay', `${totalDelay}ms`);
        
        // Trigger animation
        photo.classList.add('is-sliding');
        
        // Remove animation class after completion to prevent it from blocking hover effects
        photo.addEventListener('animationend', () => {
            photo.classList.remove('is-sliding');
            photo.classList.add('has-slid');
        }, { once: true });
    });
});
