import toggleDarkMode from './modules/darkmode.js';
import toggleHeaderMenu from './modules/header.js';

// Call the toggleDarkMode function when the button is clicked
const button = document.querySelector('.header__toggle-button');
button.addEventListener('click', toggleDarkMode);

// Call the toggleHeaderMenu function when the logo is clicked
toggleHeaderMenu();