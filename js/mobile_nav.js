const burger = document.querySelector('.burger-wrapper');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

burger.addEventListener('click', () => {
	burger.classList.toggle('nav-open');
	mobileNavMenu.classList.toggle('nav-open');
	document.body.classList.toggle('no-scroll');
});

window.addEventListener('scroll', () => {
	console.log(window.pageYOffset);
});
