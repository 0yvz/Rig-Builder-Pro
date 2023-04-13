// Header dropdown menu on click
export default function toggleHeaderMenu() {
	const headerLogo = document.getElementById('header-logo');
	const sidebarContainer = document.querySelector('.sidebar-container');

	headerLogo.addEventListener('click', () => {
		sidebarContainer.classList.toggle('sidebar-container--visible');
	});
}
