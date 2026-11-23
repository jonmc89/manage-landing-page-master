// Mobile Menu

const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.querySelector('.menu-button img');

function closeMenu() {
  menuBtn.setAttribute('aria-expanded', 'false');
  overlay.classList.remove('show-overlay');
  mobileMenu.classList.remove('show-mobile-menu');
  menuIcon.src = './images/icon-hamburger.svg';
}

document.addEventListener('click', (event) => {
  const clickedOutside =
    !mobileMenu.contains(event.target) && !menuBtn.contains(event.target);

  if (clickedOutside) {
    closeMenu();
  }
});

menuBtn.addEventListener('click', () => {
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';

  if (isOpen) {
    closeMenu();
  } else {
    menuBtn.setAttribute('aria-expanded', 'true');
    overlay.classList.add('show-overlay');
    mobileMenu.classList.add('show-mobile-menu');
    menuIcon.src = './images/icon-close.svg';
  }
});

window.addEventListener('scroll', () => {
  closeMenu();
});
