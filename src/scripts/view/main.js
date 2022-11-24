import data from '../data/DATA.json';
import '../component/restaurant-list.js'

const main = () => {
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('slide');
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
