const navbar = document.querySelector('.header__nav');
window.onscroll = function () {
	// pageYOffset or scrollY
	if (window.pageYOffset > 200) {
		navbar.classList.add('nav-colored')
	} else {
		navbar.classList.remove('nav-colored')
	}
}
