// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di clik
document.querySelector('#hamburger-menu') .onclick = () => {
	navbarNav.classlist.toggle('active');
};
