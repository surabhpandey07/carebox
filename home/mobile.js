/* filepath: /c:/Users/PC/Desktop/Care box/home/script.js */

document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu button to HTML
    const navbar = document.querySelector('.navbar');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    navbar.appendChild(menuButton);

    // Toggle mobile menu
    const mobileMenu = document.querySelector('.home-parent');
    menuButton.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});