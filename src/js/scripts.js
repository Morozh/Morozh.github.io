/* Menu toggle */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('is-show');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('is-show');
    });
}

/* Remove menu after click on menu item */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('is-show');
}

navLink.forEach(n => {
    n.addEventListener('click', linkAction);
});


/* Accordion */
const skillsContent = document.getElementsByClassName('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content is-closed';
    }

    if (itemClass === 'skills__content is-closed') {
        this.parentNode.className = 'skills__content is-opened';
    } else {
        this.parentNode.className = 'skills__content is-closed';
    }
}

skillsHeader.forEach(el => el.addEventListener('click', toggleSkills));

/* Tabs */
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('is-active');
        });
        target.classList.add('is-active');

        tabs.forEach(tab => {
            tab.classList.remove('is-active');
        });
        tab.classList.add('is-active');
    })
});

/* Swiper */
const swiper = new Swiper('.projects__container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    loop: true,
    breakpoints: {
        568: {
            slidesPerView: 1
        }
    }
});

/* Scroll header */
function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* Scroll arrow */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/* Reveal animations */
const slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: 0,
    delay: 200
};

const slideDown = {
    distance: '150%',
    origin: 'top',
    opacity: 0,
    duration: 600
};

const slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: 0,
    delay: 300
};

// Section title & subtitle
ScrollReveal().reveal('.section__title', slideLeft);
ScrollReveal().reveal('.section__subtitle', slideRight);

// Home
ScrollReveal().reveal('.home__social', slideLeft);
ScrollReveal().reveal('.home__img', slideDown);
ScrollReveal().reveal('.home__info', slideRight);

// About
ScrollReveal().reveal('.about__img', slideRight);
ScrollReveal().reveal('.about__info', slideRight);

// Skills
const skillsAccordions = document.querySelectorAll('.skills__col');
ScrollReveal().reveal(skillsAccordions, slideRight);

// Qualification
const qualButton = document.querySelectorAll('.qualification__button');
ScrollReveal().reveal(qualButton, slideRight);

const qualContent = document.querySelectorAll('.qualification__sections');
ScrollReveal().reveal(qualContent, slideRight);

// Projects
ScrollReveal().reveal('.projects__container', slideRight);
