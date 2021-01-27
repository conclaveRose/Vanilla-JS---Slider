'use strict';

//selector
const zone = document.querySelector('.zone');
const container = document.querySelector('#container');
const leftI = document.querySelector('.fas.fa-angle-left');
const rightI = document.querySelector('.fas.fa-angle-right');

//variable
const leftBtn = "fas fa-angle-left";
const rightBtn = "fas fa-angle-right";

// addEventListener
document.addEventListener('DOMContentLoaded', classDefault);
zone.addEventListener('click', DoSlide);


//function
function classDefault() {
    container.classList = 'default';
}


function DoSlide(event) {
    const btn = event.target;
    if (btn.classList == leftBtn) {
        switch (container.className) {
            case 'default':
                container.classList.remove('default');
                container.classList.add('left');
                rightI.style.display = 'block';
                break;
            case 'left':
                container.classList.remove('left');
                container.classList.add('left2');
                leftI.style.display = 'none';
                rightI.style.display = 'block';
                break;
        }

    } else if (btn.classList == rightBtn) {
        switch (container.className) {
            case 'left2':
                container.classList.remove('left2');
                container.classList.add('left');
                leftI.style.display = 'block';
                break;
            case 'left':
                container.classList.remove('left');
                container.classList.add('default');
                rightI.style.display = 'none';
                break;
        }
    }
};












