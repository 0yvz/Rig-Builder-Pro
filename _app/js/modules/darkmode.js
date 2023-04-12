export default function toggleDarkMode() {
	console.log('Dark mode toggle button clicked');
	
	const root = document.documentElement;
	const button = document.querySelector('.header__toggle-button');

	if (root.classList.contains('dark-mode')) {
	  root.classList.remove('dark-mode');
	  button.textContent = 'Dark Mode';
	} else {
	  root.classList.add('dark-mode');
	  button.textContent = 'Light Mode';
	}
 }
 