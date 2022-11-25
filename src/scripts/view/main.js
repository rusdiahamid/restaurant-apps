import data from '../data/DATA.json';
import '../component/restaurant-list.js'

const main = () => {
    const menu = document.querySelector('#menu');
    // const hero = document.querySelector('.hero');
    const main = document.querySelector('main');
    const drawer = document.querySelector('nav-bar');

    menu.addEventListener('click', function (event) {
        drawer.classList.toggle('open');
        event.stopPropagation();
    });

    // hero.addEventListener('click', function () {
    //     drawer.classList.remove('open');
    // });

    main.addEventListener('click', function () {
        drawer.classList.remove('open');
    });

    const restoListElement = document.querySelector('restaurant-list');
    restoListElement.restaurants = data.restaurants;

    // window.onscroll = () => {
    //     const target = document.getElementById('home');

    //     let height = window.innerHeight;

    //     const scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    //     // Change this if you want it to fade faster
    //     height = height / 2;

    //     target.style.opacity = (height - scrollTop) / height;
    // };
};

export default main;
