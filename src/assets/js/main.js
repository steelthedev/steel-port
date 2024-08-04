document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll position to trigger the change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


function toggleNavbar() {
    var menu = document.getElementById('navbarMenu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}
