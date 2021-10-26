document.querySelector('#menuButton').addEventListener('click', () => {
  const mobileMenu = document.querySelector('#mobileMenu');
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
  } else {
    mobileMenu.classList.add('open');
  }
});

document.querySelector('#mobileMenu').addEventListener('click', (e) => {
  if (e.target.classList.contains('open')) {
    document.querySelector('.mobile-menu.open').classList.remove('open');
  }
})