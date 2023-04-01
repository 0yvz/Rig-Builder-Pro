import toggleDarkMode from './modules/darkmode.js';

// Call the toggleDarkMode function when the button is clicked
const button = document.querySelector('.header__toggle-button');
button.addEventListener('click', toggleDarkMode);