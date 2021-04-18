const menuElement = document.querySelector('.menu');
const navElementOpen = document.querySelector('.hamburger');
const navElementClosed = document.querySelector('.close');
const navBarElement = document.querySelector('.nav');

const navLeft = menuElement.getBoundingClientRect().left;
navElementOpen.addEventListener('click', () => {
    if (navLeft < 0) {
        menuElement.classList.add('show');
        document.body.classList.add('show');
        navBarElement.classList.add('show');
    }
});

navElementClosed.addEventListener('click', () => {
    if (navLeft < 0) {
        menuElement.classList.remove('show');
        document.body.classList.remove('show');
        navBarElement.classList.remove('show');
    }
});

// Fix-navigation
const navHeight = navBarElement.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight >= navHeight) {
        navBarElement.classList.add('fix-nav');
    } else {
        navBarElement.classList.remove('fix-nav');
    }
});

// Scroll to

const links = [...document.querySelectorAll('.scroll-link')];

links.map(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.target.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });

        navBarElement.classList.remove('show');
        menuElement.classList.remove('show');
        document.body.classList.remove('show');
    });
});

new TypeIt('#type1', {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
})
    .type('Designer', {delay: 400}).pause(500).delete(9)
    .type('Developer', {delay: 400}).pause(500).delete(9)
    .type('Blogger', {delay: 400}).pause(500).delete(9)
    .go();

new TypeIt('#type2', {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
})
    .type('Designer', {delay: 400}).pause(500).delete(9)
    .type('Developer', {delay: 400}).pause(500).delete(9)
    .type('Blogger', {delay: 400}).pause(500).delete(9)
    .go();

// GSAP animations
gsap.from('.logo', {opacity: 0, duration: 1, delay: 0.5, y: -10});
gsap.from('.hamburger', {opacity: 0, duration: 1, delay: 1, x: 20});
gsap.from('.banner', {opacity: 0, duration: 1, delay: 1.5, x: -200});
gsap.from('.hero h3', {opacity: 0, duration: 1, delay: 2, y: -50});
gsap.from('.hero h1', {opacity: 0, duration: 1, delay: 2.5, y: -45});
gsap.from('.hero h4', {opacity: 0, duration: 1, delay: 3, y: -30});
gsap.from('.hero a', {opacity: 0, duration: 1, delay: 3.5, y: 50});
gsap.from('.nav-item', {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2});
gsap.from('.icons span', {opacity: 0, duration: 1, delay: 2.5, x: -30, stagger: 0.2});


// Glide JS
const glide = document.querySelector('.glide');
if (glide)
    new Glide(glide, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 30,
        hoverpause: true,
        autoplay: 2000,
        animationDuration: 3000,
        animationTimingFunc: "ease-in-out",
        breakpoints: {
            996: {
                perView: 2,
            },
            768: {
                perView: 1
            },
        },
    }).mount();


// AOS
AOS.init();