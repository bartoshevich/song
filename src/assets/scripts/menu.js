
const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.navbar__menu');
const menuItems = document.querySelectorAll('.menu__item')
const mainContent = document.querySelector('.main');


let isOpen = false;

menuButton.addEventListener('click', () => {
    if (!isOpen) {
        openMenu();
    } else if (isOpen) {
        closeMenu();
    }
});

menuItems.forEach((e) => e.addEventListener('click', closeMenu));

window.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.navbar__menu') && !target.closest('.menu__button')) {
        closeMenu();
    }
});


function openMenu() { 
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.classList.add('menu__button--open');
    menu.classList.add('navbar__menu--open');
    mainContent.classList.add('padding-top');
    isOpen = true;
}

function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.classList.remove('menu__button--open');
    menu.classList.remove('navbar__menu--open');
    mainContent.classList.remove('padding-top');
    isOpen = false;
}