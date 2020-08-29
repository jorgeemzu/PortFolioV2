const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', showMenu);

function showMenu() {
	menu.classList.toggle('showMenu');
	hamburger.classList.toggle('rotate_hamburger');
}
