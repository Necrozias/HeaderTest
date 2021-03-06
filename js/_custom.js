document.addEventListener("DOMContentLoaded", function() {

	let burgerIcon = document.querySelector('.burger-icon'),
		burgerMenu = document.querySelector('.burger__popup'),
		searchIcon = document.querySelector('.mobile__search'),
		searchInput = document.querySelector('.search__mobile'),
		menu = document.querySelector('.products-menu');

	burgerIcon.onclick = function() {
		if (burgerMenu.classList.contains('hidden')) {
			burgerMenu.classList.remove('hidden');
			burgerMenu.classList.add('visible');
		} else if (burgerMenu.classList.contains('visible')) {
			burgerMenu.classList.remove('visible');
			burgerMenu.classList.add('hidden');
		}
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden');
			menu.classList.add('visible');
		} else if (menu.classList.contains('visible')){
			menu.classList.remove('visible');
			menu.classList.add('hidden');
		}

	};

	searchIcon.onclick = function() {
		if (searchInput.classList.contains('hidden')) {
			searchInput.classList.remove('hidden');
			searchInput.classList.add('visible');
		} else if (searchInput.classList.contains('visible')) {
			searchInput.classList.remove('visible');
			searchInput.classList.add('hidden');
		}
	}

});
