const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const fadeIn = document.querySelectorAll('.fadein');

hamburger.addEventListener('click', showMenu);

function showMenu() {
	menu.classList.toggle('showMenu');
	hamburger.classList.toggle('rotate_hamburger');
}

const options = {
	threshold: 0.1,
	rootMargin: '0px 0px -20px 0px',
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('apear');
			appearOnScroll.unobserve(entry.target);
		}
	});
}, options);

fadeIn.forEach(fader => {
	appearOnScroll.observe(fader);
});
