document.querySelector('#menuButton').addEventListener('click', () => {
    const mobileMenu = document.querySelector('#mobileMenu');
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
    } else {
        mobileMenu.classList.add('open');
    }
});