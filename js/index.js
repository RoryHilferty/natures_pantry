const setHeight = () => {
	const logoWrapperHeight = document.querySelector('.logo-wrapper').getBoundingClientRect().height;
	const desktopNavHeight = document.querySelector('.desktop-nav').getBoundingClientRect().height;
	const footerHeight = document.querySelector('.footer').getBoundingClientRect().height;
	const mainWrapper = document.querySelector('.main-wrapper');

	if (window.innerWidth >= 700) {
		mainWrapper.style.height = `${window.innerHeight - (logoWrapperHeight + desktopNavHeight + footerHeight)}px`;
	} else {
		mainWrapper.style.height = 'unset';
	}
};

window.addEventListener('load', setHeight);
window.addEventListener('resize', setHeight);
