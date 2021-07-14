const navMenu = document.querySelector('.nav_menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', showMobileMenu);

function showMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}