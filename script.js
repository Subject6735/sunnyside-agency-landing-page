const hamburger = document.querySelector('#hamburger-icon');
const menu = document.querySelector('#mobile-menu');
const path = document.querySelector('#hamburger-svg-path');

hamburger.addEventListener('click', toggleMenu);
menu.style.display = 'none';

function toggleMenu(e) {
    if (e.target.matches('svg#hamburger-icon')) {
        if(menu.style.display === 'none') {
            menu.style.display = 'grid';
            path.style.fill = '#c7c7c7';
        }
        else {
            menu.style.display = 'none';
            path.style.fill = '#fff';
        }
    }
}

const socialOver = (id) => document.querySelector('#' + id).style.fill = '#fff';
const socialOut = (id) => document.querySelector('#' + id).style.fill = '#2C7566';