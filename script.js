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

// Form Validation

const formEl = document.getElementById('form');
const emailInputEl = document.getElementById('email');
const errorMessageEl = document.getElementById('errorMessage');

emailInputEl.addEventListener('input', (event) => {
  if (emailInputEl.validity.valid) {
    errorMessageEl.textContent = '';
    errorMessageEl.classList.remove('show-error-message');
    errorMessageEl.hidden = true;
    emailInputEl.setAttribute('aria-invalid', 'false');
    emailInputEl.classList.remove('input-error-text');
  } else {
    showError();
  }
});

formEl.addEventListener('submit', (event) => {
  if (!emailInputEl.validity.valid) {
    showError();
    emailInputEl.classList.add('input-error-text');
    event.preventDefault();
  }
});

function showError() {
  if (emailInputEl.validity.valueMissing) {
    errorMessageEl.textContent = 'Please insert valid email';
  } else if (emailInputEl.validity.typeMismatch) {
    errorMessageEl.textContent = 'Please insert valid email';
  }
  errorMessageEl.hidden = false;
  emailInputEl.classList.add('input-error');
  errorMessageEl.classList.add('show-error-message');

  emailInputEl.setAttribute('aria-invalid', 'false');
}
