'use strict';

//selector
const zone = document.querySelector('.zone');
const container = document.querySelector('#container');

//variable
const leftBtn = "fas fa-angle-left";

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
                break;
            case 'left':
                container.classList.remove('left');
                container.classList.add('left2');
                break;
        }
    }
}










