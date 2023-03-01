// toggle

const navbarNav = document.querySelector('.navbar-nav');
// ketika diklick

document.querySelector('#hamburger-menu')
onclick = () => {
    navbarNav.classList.toggle('active')
};

const hamburger = document.querySelector('#hamburger-menu');


document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    } 
})